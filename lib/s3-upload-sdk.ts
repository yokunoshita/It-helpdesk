import {
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { createHash, createHmac } from "node:crypto";

type UploadWithSdkParams = {
  buffer: Buffer | Uint8Array;
  contentType: string;
  objectKey: string;
};

const getRequiredEnv = (name: string) => {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value.trim();
};

const ensureHttpsEndpoint = (raw: string) => {
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
};

const trimSlashes = (value: string) => value.replace(/^\/+|\/+$/g, "");

const encodePathSegment = (value: string) =>
  encodeURIComponent(value).replace(/%2F/g, "/");

const encodeRfc3986 = (value: string) =>
  encodeURIComponent(value).replace(/[!'()*]/g, (char) =>
    `%${char.charCodeAt(0).toString(16).toUpperCase()}`
  );

const sha256Hex = (value: string | Buffer) =>
  createHash("sha256").update(value).digest("hex");

const hmac = (key: Buffer | string, value: string) =>
  createHmac("sha256", key).update(value).digest();

const toAmzDate = (date: Date) => {
  const iso = date.toISOString().replace(/[:-]|\.\d{3}/g, "");
  return {
    amzDate: iso,
    dateStamp: iso.slice(0, 8),
  };
};

const createS3Client = () => {
  const endpoint = ensureHttpsEndpoint(getRequiredEnv("S3_SERVER"));
  const region = getRequiredEnv("S3_REGION");
  const accessKeyId = getRequiredEnv("S3_ACCESS_KEY_ID");
  const secretAccessKey = getRequiredEnv("S3_SECRET_ACCESS_KEY");

  return new S3Client({
    region,
    endpoint,
    forcePathStyle: true,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
};

export const buildObjectUrlWithSdk = (objectKey: string) => {
  const endpointRaw = ensureHttpsEndpoint(getRequiredEnv("S3_SERVER"));
  const bucket = getRequiredEnv("S3_BUCKET_NAME");
  const endpoint = new URL(endpointRaw);
  const basePath = trimSlashes(endpoint.pathname);
  const pathParts = [basePath, bucket, encodePathSegment(objectKey.replace(/^\/+/, ""))]
    .filter(Boolean)
    .join("/");
  return `${endpoint.protocol}//${endpoint.host}/${pathParts}`;
};

export const uploadImageToS3WithSdk = async ({
  buffer,
  contentType,
  objectKey,
}: UploadWithSdkParams) => {
  const bucket = getRequiredEnv("S3_BUCKET_NAME");
  const client = createS3Client();

  await client.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: objectKey,
      Body: buffer,
      ContentType: contentType,
    })
  );

  return buildObjectUrlWithSdk(objectKey);
};

export const createPresignedGetUrlWithSdk = async ({
  objectUrl,
  expiresInSeconds = 900,
}: {
  objectUrl: string;
  expiresInSeconds?: number;
}) => {
  const accessKeyId = getRequiredEnv("S3_ACCESS_KEY_ID");
  const secretAccessKey = getRequiredEnv("S3_SECRET_ACCESS_KEY");
  const region = getRequiredEnv("S3_REGION");
  const parsed = new URL(objectUrl);
  parsed.search = "";
  parsed.hash = "";
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
    .map(([key, value]) => `${encodeRfc3986(key)}=${encodeRfc3986(value)}`)
    .sort()
    .join("&");

  const canonicalRequest = [
    "GET",
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

type MessageWithAttachmentUrl = {
  attachmentUrl?: string | null;
};

export const signMessageAttachmentUrlWithSdk = async <
  T extends MessageWithAttachmentUrl
>(
  message: T
): Promise<T> => {
  if (!message.attachmentUrl) return message;
  try {
    const signedUrl = await createPresignedGetUrlWithSdk({
      objectUrl: message.attachmentUrl,
    });
    return {
      ...message,
      attachmentUrl: signedUrl,
    };
  } catch {
    return message;
  }
};
