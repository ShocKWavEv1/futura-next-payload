import axios from "axios";

export async function revalidatePage(slug: string) {
  const url = `${process.env.PAYLOAD_PUBLIC_FRONTEND_URL}/api/revalidate?secret=${process.env.PAYLOAD_PUBLIC_FRONTEND_SECRET}&slug=${slug}`;

  if (
    !process.env.PAYLOAD_PUBLIC_FRONTEND_SECRET ||
    !process.env.PAYLOAD_PUBLIC_FRONTEND_URL
  )
    return { status: 400, message: "Missing Frontend Secret or URL" };

  try {
    await axios({
      method: "get",
      url,
    });
    console.log("Revalidation triggered");
  } catch (e) {
    console.log(e);
  }
}
