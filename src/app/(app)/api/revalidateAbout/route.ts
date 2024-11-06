import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  revalidatePath("/about");
  return NextResponse.json({ status: 200, message: "Quick response test" });
}
