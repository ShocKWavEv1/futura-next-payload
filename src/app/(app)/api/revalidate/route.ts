import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: any, res: any) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const secret = searchParams.get("secret");

  if (secret !== process.env.FRONTEND_SECRET) {
    return NextResponse.json({ status: 401, message: "Invalid Token" });
  } else if (!slug) {
    return NextResponse.json({ status: 400, message: "Missing Slug" });
  }

  try {
    revalidatePath("/");
    revalidatePath("/about");
    return NextResponse.json({ status: 200, message: "Revalidated" });
  } catch (err) {
    console.log("NEXT APP", err);
    return NextResponse.json({ status: 500, message: "Slug not found" });
  }
}
