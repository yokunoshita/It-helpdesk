import { createHash, createHmac } from "node:crypto";

const getRequiredEnv = (name: string) => {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value.trim();
};

const sha256Hex = (input: string | Buffer) =>
  createHash("sha256").update(input).digest("hex");

const hmac = (key: Buffer | string, input: string) =>
  createHmac("sha256", key).update(input).digest();

const toAmzDate = (date: Date) => {
  const iso = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return {
    amzDate: iso,
    dateStamp: iso.slice(0, 8),
  };
};

const encodeRfc3986 = (value: string) =>
  encodeURIComponent(value).replace(/[!'()*]/g, (c) =>
    `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  );

const encodePathSegment = (value: string) =>
  encodeRfc3986(value).replace(/%2F/g, "/");

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

const normalizeBaseEndpoint = (raw: string) => {
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const parsed = new URL(withScheme);
  parsed.pathname = parsed.pathname.replace(/\/+$/, "");
  return parsed;
};

const getStorageBase = () => {
  const endpointRaw = getRequiredEnv("S3_SERVER");
  const bucketName = getRequiredEnv("S3_BUCKET_NAME");
  const baseUrl = normalizeBaseEndpoint(endpointRaw);
  const bucketPath = encodePathSegment(bucketName);
  return { baseUrl, bucketPath };
};

export const buildObjectUrl = (objectKey: string) => {
  const { baseUrl, bucketPath } = getStorageBase();
  const normalizedObjectKey = objectKey.replace(/^\/+/, "");
  const basePath = trimSlashes(baseUrl.pathname);
  const bucketPathTrimmed = trimSlashes(bucketPath);
  const hostPrefix = baseUrl.hostname.split(".")[0] || "";
  const hostAlreadyContainsBucket =
    hostPrefix.toLowerCase() === bucketPathTrimmed.toLowerCase();
  const basePathEndsWithBucket =
    !!basePath &&
    !!bucketPathTrimmed &&
    (basePath.toLowerCase() === bucketPathTrimmed.toLowerCase() ||
      basePath.toLowerCase().endsWith(`/${bucketPathTrimmed.toLowerCase()}`));
  const shouldAppendBucketPath = !hostAlreadyContainsBucket && !basePathEndsWithBucket;
  const pathParts = [
    basePath,
    shouldAppendBucketPath ? bucketPathTrimmed : "",
    encodePathSegment(normalizedObjectKey),
  ]
    .filter(Boolean)
    .join("/");
  return `${baseUrl.protocol}//${baseUrl.host}/${pathParts}`;
};

const signPresignedUrl = ({
  method,
  targetUrl,
  expiresInSeconds,
}: {
  method: "GET" | "PUT";
  targetUrl: string;
  expiresInSeconds: number;
}) => {
  const accessKeyId = getRequiredEnv("S3_ACCESS_KEY_ID");
  const secretAccessKey = getRequiredEnv("S3_SECRET_ACCESS_KEY");
  const region = getRequiredEnv("S3_REGION");

  const parsed = new URL(targetUrl);
  const host = parsed.host;
  const canonicalUri = parsed.pathname || "/";

  const { amzDate, dateStamp } = toAmzDate(new Date());
  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const signedHeaders = "host";

  const queryEntries: Array<[string, string]> = [
    ["X-Amz-Algorithm", "AWS4-HMAC-SHA256"],
    ["X-Amz-Credential", `${accessKeyId}/${credentialScope}`],
    ["X-Amz-Date", amzDate],
    ["X-Amz-Expires", String(expiresInSeconds)],
    ["X-Amz-SignedHeaders", signedHeaders],
  ];

  const canonicalQueryString = queryEntries
    .map(([k, v]) => `${encodeRfc3986(k)}=${encodeRfc3986(v)}`)
    .sort()
    .join("&");

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQueryString,
    `host:${host}\n`,
    signedHeaders,
    "UNSIGNED-PAYLOAD",
  ].join("\n");

  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    sha256Hex(canonicalRequest),
  ].join("\n");

  const kDate = hmac(`AWS4${secretAccessKey}`, dateStamp);
  const kRegion = hmac(kDate, region);
  const kService = hmac(kRegion, "s3");
  const kSigning = hmac(kService, "aws4_request");
  const signature = createHmac("sha256", kSigning)
    .update(stringToSign)
    .digest("hex");

  return `${parsed.protocol}//${host}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`;
};

export const createPresignedPutUrl = ({
  objectKey,
  expiresInSeconds = 120,
}: {
  objectKey: string;
  expiresInSeconds?: number;
}) => {
  const targetUrl = buildObjectUrl(objectKey);
  return signPresignedUrl({
    method: "PUT",
    targetUrl,
    expiresInSeconds,
  });
};
