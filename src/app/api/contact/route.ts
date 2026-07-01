import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

  if (!name || typeof name !== "string" || name.trim().length < 2)
    errors.name = "Enter a name with at least 2 characters.";
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim()))
    errors.email = "Enter a valid email address.";
  if (!message || typeof message !== "string" || message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  if (Object.keys(errors).length > 0)
    return NextResponse.json({ errors }, { status: 422 });

  try {
    await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        message: message.trim(),
      },
    });
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}