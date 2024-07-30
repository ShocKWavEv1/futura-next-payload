import { NextResponse } from "next/server";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

const payload = await getPayloadHMR({ config: configPromise });

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user");

  if (!userId) {
    return NextResponse.json({ status: 400, message: "Missing User ID" });
  }

  try {
    const cart = await payload.find({
      collection: "cart",
      depth: 2,
      where: {
        user: {
          equals: userId,
        },
      },
    });

    if (!cart?.docs?.[0]) {
      return NextResponse.json({
        status: 404,
        message: "Cart not found",
        cart: { items: [] },
      });
    }
    return NextResponse.json({
      status: 200,
      message: "Revalidated",
      cart: cart.docs[0],
    });
  } catch (err) {
    console.error("NEXT APP", err);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}
