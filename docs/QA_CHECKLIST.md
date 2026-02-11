# QA Checklist (Manual + Smoke)

## Scope
- Ticket creation flow
- Active ticket blocking rule
- User/admin chat flow
- Admin status workflow
- Admin report export

## Manual Checklist

1. Public navigation
- Open `/`, `/ticket`, `/chat`, `/dashboard`, `/admin`.
- Verify navbar/footer stay consistent and footer stays at bottom on short pages.

2. Create ticket
- From `/ticket`, submit valid form.
- Verify success toast and redirect to `/chat`.
- Verify ticket code exists in admin queue.

3. Active ticket rule (user)
- While ticket status is `OPEN` or `IN_PROGRESS`, open `/ticket`.
- Verify form is blocked and user sees instruction to continue active chat.
- Verify direct API create attempt returns `409`.

4. Admin workflow
- Login admin at `/admin`.
- Open new ticket, assign to self.
- Change status from dropdown and verify status updates immediately (no save button).
- Send first admin reply to ticket with status `OPEN`, verify status auto changes to `IN_PROGRESS`.

5. Close/reopen behavior
- Admin sets status to `CLOSED`.
- User opens chat and sends new message.
- Verify ticket status becomes `IN_PROGRESS` again.

6. Recent reports/statistics
- Open `/dashboard`.
- Verify "Laporan Terbaru" loads from database and pagination works.

7. Admin export
- In `/admin`, click `Download Laporan`.
- Verify `.csv` file downloaded and contains ticket rows + SLA columns.

## Automated Smoke

Command:

```bash
npm run qa:smoke
```

Environment:
- App is running at `http://localhost:3000` (override with `QA_BASE_URL`).
- Admin creds via env:
  - `ADMIN_USERNAME`
  - `ADMIN_PASSWORD`

Smoke script validates:
- create ticket success
- second active ticket blocked (`409`)
- admin login success
- admin first reply auto-moves `OPEN -> IN_PROGRESS`
- admin close ticket
- user can create ticket again after close
- admin CSV export works
