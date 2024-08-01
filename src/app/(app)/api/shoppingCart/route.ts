import { NextResponse } from "next/server";
import {
  createCart,
  getCart,
  updateCart,
} from "../../lib/shoppingBagMethods/shoppingBagMethods";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId: any = searchParams.get("user");
  const response = await getCart(userId);
  return NextResponse.json(response);
}

export async function POST(req: Request) {
  const { userId, item } = await req.json();
  const response = await createCart(userId, item);
  return NextResponse.json(response);
}

export async function PATCH(req: Request) {
  const { userId, shoppingBag } = await req.json();
  const response = await updateCart(userId, shoppingBag);
  return NextResponse.json(response);
}
