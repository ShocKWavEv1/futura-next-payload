import { NextResponse } from "next/server";

export async function GET() {
  const secret = process.env.FRONTEND_SECRET;

  if (!secret) {
    return NextResponse.json({ status: 500, message: "Secret not found" });
  }

  return NextResponse.json({ secret });
}
