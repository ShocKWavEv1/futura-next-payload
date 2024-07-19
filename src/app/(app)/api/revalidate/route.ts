import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const slug = req?.query?.slug ?? "";
  const secret = req?.query?.secret ?? "";

  if (secret !== process.env.FRONTEND_SECRET) {
    return NextResponse.json({ status: 401, message: "Invalid Token" });
  } else if (!slug) {
    return NextResponse.json({ status: 400, message: "Missing Slug" });
  }

  try {
    await res.revalidate(`/${slug.replace(/index/, "")}`);
    return NextResponse.json({ status: 200, message: "Revalidated" });
  } catch (err) {
    console.log("NEXT APP", err);
    return NextResponse.json({ status: 500, message: "Slug not found" });
  }
}
