import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message } = body ?? {};

  const errors: Record<string, string> = {};

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.name = "Enter a name with at least 2 characters.";
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  if (company && typeof company !== "string") {
    errors.company = "Invalid company value.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // In production: send an email (e.g. via Resend/SendGrid) or write to a
  // database/CRM here. Kept as a stub so this works with zero external
  // services configured.
  console.log("New Newbizz contact submission:", {
    name,
    email,
    company,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
