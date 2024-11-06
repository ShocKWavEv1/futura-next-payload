import { NextResponse } from "next/server";
import { getCrew } from "../../lib/crewQuery/crewQuery";

export async function GET(req: Request) {
  try {
    const response = await getCrew();
    return NextResponse.json(response);
  } catch (err) {
    console.error("Error handling request", err);
    return NextResponse.json({ status: 500, message: err });
  }
}
