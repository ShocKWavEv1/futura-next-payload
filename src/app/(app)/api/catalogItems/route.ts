import { NextResponse } from "next/server";
import { getCatalogPagination } from "../../lib/catalogPagination/catalogPagination";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const currentPage: any = searchParams.get("currentPage");
  const limit: any = searchParams.get("limit");
  try {
    const response = await getCatalogPagination(currentPage, limit);
    return NextResponse.json(response);
  } catch (err) {
    console.error("Error handling GET request", err);
    return NextResponse.json({ status: 500, message: err });
  }
}
