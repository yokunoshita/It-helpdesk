/* eslint-disable no-console */
const BASE_URL = process.env.QA_BASE_URL || "http://localhost:3000";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "227";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "rahasia";

class CookieJar {
  constructor() {
    this.store = new Map();
  }

  addFromResponse(res) {
    const setCookie = res.headers.get("set-cookie");
    if (!setCookie) return;

    const cookies = setCookie.split(/,(?=[^;]+=[^;]+)/g);
    for (const raw of cookies) {
      const first = raw.split(";")[0]?.trim();
      if (!first) continue;
      const index = first.indexOf("=");
      if (index < 1) continue;
      const name = first.slice(0, index).trim();
      const value = first.slice(index + 1).trim();
      this.store.set(name, value);
    }
  }

  header() {
    if (!this.store.size) return undefined;
    return Array.from(this.store.entries())
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
  }
}

async function request(path, { method = "GET", json, jar } = {}) {
  const headers = {};
  if (json !== undefined) headers["Content-Type"] = "application/json";
  const cookie = jar?.header();
  if (cookie) headers.Cookie = cookie;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: json !== undefined ? JSON.stringify(json) : undefined,
  });
  if (jar) jar.addFromResponse(res);

  const text = await res.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  return { res, data };
}

function expect(condition, message) {
  if (!condition) throw new Error(message);
}

async function run() {
  console.log(`Running QA smoke against ${BASE_URL}`);

  const userJar = new CookieJar();
  const adminJar = new CookieJar();

  const unique = Date.now();
  const createPayload = {
    title: `QA Ticket ${unique}`,
    description: "Smoke test ticket created by script",
    priority: "MEDIUM",
    category: "SOFTWARE",
  };

  console.log("1) User creates ticket");
  const create = await request("/api/tickets", {
    method: "POST",
    json: createPayload,
    jar: userJar,
  });
  expect(create.res.ok, `Create ticket failed: ${JSON.stringify(create.data)}`);
  expect(
    typeof create.data?.id === "string" || typeof create.data?.code === "string",
    "Create ticket response missing id/code"
  );
  const ticketCode = create.data.code;
  const ticketId = create.data.id;
  console.log(`   created ${ticketCode}`);

  console.log("2) User blocked from creating second active ticket");
  const secondCreate = await request("/api/tickets", {
    method: "POST",
    json: {
      ...createPayload,
      title: `QA Ticket Blocked ${unique}`,
    },
    jar: userJar,
  });
  expect(
    secondCreate.res.status === 409,
    `Expected 409 for second active ticket, got ${secondCreate.res.status}`
  );

  console.log("3) Admin login");
  const adminLogin = await request("/api/admin/session", {
    method: "POST",
    json: {
      username: ADMIN_USERNAME,
      password: ADMIN_PASSWORD,
    },
    jar: adminJar,
  });
  expect(adminLogin.res.ok, `Admin login failed: ${JSON.stringify(adminLogin.data)}`);
  expect(adminLogin.data?.authenticated === true, "Admin session not authenticated");

  console.log("4) Admin replies to ticket (OPEN -> IN_PROGRESS)");
  const adminReply = await request(`/api/tickets/${ticketCode}/messages`, {
    method: "POST",
    json: {
      sender: "admin",
      message: "Halo, tiket sedang kami proses.",
    },
    jar: adminJar,
  });
  expect(adminReply.res.status === 201, `Admin reply failed: ${JSON.stringify(adminReply.data)}`);

  const afterReply = await request(`/api/tickets/${ticketCode}`, { jar: userJar });
  expect(afterReply.res.ok, `Failed to get ticket after reply: ${JSON.stringify(afterReply.data)}`);
  expect(
    afterReply.data?.status === "IN_PROGRESS",
    `Expected IN_PROGRESS after admin reply, got ${afterReply.data?.status}`
  );

  console.log("5) Admin closes ticket");
  const close = await request(`/api/admin/tickets/${ticketId}`, {
    method: "PATCH",
    json: { status: "CLOSED" },
    jar: adminJar,
  });
  expect(close.res.ok, `Close ticket failed: ${JSON.stringify(close.data)}`);

  console.log("6) User can create new ticket after close");
  const createAfterClose = await request("/api/tickets", {
    method: "POST",
    json: {
      ...createPayload,
      title: `QA Ticket After Close ${unique}`,
    },
    jar: userJar,
  });
  expect(
    createAfterClose.res.ok,
    `Expected create success after close, got ${createAfterClose.res.status}`
  );

  console.log("7) Admin can export report");
  const exportReport = await request("/api/admin/reports/export", { jar: adminJar });
  expect(exportReport.res.ok, `Export report failed: ${JSON.stringify(exportReport.data)}`);
  const contentType = exportReport.res.headers.get("content-type") || "";
  expect(contentType.includes("text/csv"), `Unexpected export content-type: ${contentType}`);

  console.log("QA smoke passed.");
}

run().catch((error) => {
  console.error("QA smoke failed:");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
