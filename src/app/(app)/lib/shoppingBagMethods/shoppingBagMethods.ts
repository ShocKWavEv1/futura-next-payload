import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import {
  base64Placeholder,
  buildImageUrl,
  processDataCart,
} from "../../utils/utils";
import getBase64 from "../../api/getBase64";

const payload = await getPayloadHMR({ config: configPromise });

const { NEXT_PUBLIC_BASE_URL } = process.env;

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
        hasCart: false,
      };
    }

    await processDataCart(cart);

    return {
      status: 200,
      message: "Revalidated",
      cart: cart.docs[0],
      hasCart: true,
    };
  } catch (err) {
    console.error("SHOPPING BAG SERVICE", err);
    return { status: 500, message: err };
  }
}

export async function createCart(userId: any, item: any) {
  if (!userId) {
    return { status: 400, message: "Missing User ID" };
  }

  try {
    const newCart = await payload.create({
      collection: "cart",
      data: {
        user: userId,
        items: [
          {
            catalogItem: item.id,
            quantity: 1,
            mainImageUrl: item.mainImageUrl,
            base64: NEXT_PUBLIC_BASE_URL
              ? await getBase64(item.mainImageUrl)
              : base64Placeholder,
          },
        ],
      },
    });

    return {
      status: 200,
      message: `Item created for user ${userId}`,
      cart: newCart,
      hasCart: true,
    };
  } catch (err) {
    console.error("Error creating cart", err);
    return { status: 500, message: err };
  }
}

export async function updateCart(userId: any, shoppingBag: any) {
  if (!userId) {
    return { status: 400, message: "Missing User ID" };
  }

  try {
    const existingCart = await payload.find({
      collection: "cart",
      where: {
        user: {
          equals: userId,
        },
      },
    });

    if (!existingCart.docs.length) {
      return { status: 404, message: "Cart not found" };
    }

    const cart: any = existingCart.docs[0];

    const updatedItems: any = [];

    shoppingBag.items.length !== 0 &&
      shoppingBag?.items?.forEach(async (item: any, idx: number) => {
        console.log("updateCart", shoppingBag);
        updatedItems.push({
          catalogItem: item.catalogItem.id,
          quantity: item.quantity ? item.quantity : 1,
          mainImageUrl: item.mainImageUrl,
          base64: NEXT_PUBLIC_BASE_URL
            ? await getBase64(item.catalogItem?.mainImage?.url)
            : base64Placeholder,
        });
      });

    const updatedCart = await payload.update({
      collection: "cart",
      id: cart.id,
      data: {
        items: updatedItems,
      },
    });

    return {
      status: 200,
      message: `Cart updated for user ${userId}`,
      cart: updatedCart,
      hasCart: true,
    };
  } catch (err) {
    console.error("Error updating cart", err);
    return { status: 500, message: err };
  }
}
