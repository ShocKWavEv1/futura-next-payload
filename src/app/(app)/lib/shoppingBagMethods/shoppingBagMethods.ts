import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

const payload = await getPayloadHMR({ config: configPromise });

export async function getCart(userId: any) {
  if (!userId) {
    return { status: 400, message: "Missing User ID" };
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
      return {
        status: 404,
        message: "Cart not found",
        cart: { items: [] },
      };
    }
    return {
      status: 200,
      message: "Revalidated",
      cart: cart.docs[0],
    };
  } catch (err) {
    console.error("SHOPPING BAG SERVICE", err);
    return { status: 500, message: "Internal Server Error" };
  }
}

export async function createCart(userId: any, shoppingBag: any) {
  console.log("createCart", userId, shoppingBag);
  return {
    status: 200,
    message: "Revalidated",
    userId: userId,
    shoppingBag: shoppingBag,
  };
}
