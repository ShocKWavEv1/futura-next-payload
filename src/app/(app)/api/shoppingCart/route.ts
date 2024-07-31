import { NextResponse } from "next/server";
import { getCart } from "../../lib/shoppingBagMethods/shoppingBagMethods";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId: any = searchParams.get("user");
  const response = await getCart(userId);
  return NextResponse.json(response);
}
