import { NextResponse } from "next/server";
import {
  createCart,
  getCart,
  updateCart,
} from "../../lib/shoppingBagMethods/shoppingBagMethods";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId: any = searchParams.get("user");
  try {
    const response = await getCart(userId);
    return NextResponse.json(response);
  } catch (err) {
    console.error("Error handling PATCH request", err);
    return NextResponse.json({ status: 500, message: err });
  }
}

export async function POST(req: Request) {
  const { userId, item } = await req.json();
  try {
    const response = await createCart(userId, item);
    return NextResponse.json(response);
  } catch (err) {
    console.error("Error handling PATCH request", err);
    return NextResponse.json({ status: 500, message: err });
  }
}

export async function PATCH(req: Request) {
  const { userId, shoppingBag } = await req.json();
  try {
    const response = await updateCart(userId, shoppingBag);
    return NextResponse.json(response);
  } catch (err) {
    console.error("Error handling PATCH request", err);
    return NextResponse.json({ status: 500, message: err });
  }
}
