import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const secret = searchParams.get("secret");

  if (secret !== process.env.FRONTEND_SECRET) {
    return NextResponse.json({ status: 401, message: "Invalid Token" });
  } else if (!path) {
    return NextResponse.json({ status: 400, message: "Missing Path" });
  }

  try {
    revalidatePath(path);
    console.log("Revalidated path:", path);
    return NextResponse.json({ status: 200, message: "Revalidated" });
  } catch (err) {
    console.error("NEXT APP", err);
    return NextResponse.json({ status: 500, message: "Path not found" });
  }
}
