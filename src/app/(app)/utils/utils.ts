export const formatPrice = (price: number) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const calculateTotalBagPrice = (shoppingBag: any) => {
  let totalBagPrice: number = 0;
  shoppingBag?.items?.forEach((item: any) => {
    totalBagPrice += item?.catalogItem?.price * item?.quantity;
  });

  return formatPrice(totalBagPrice);
};

export const calculateSinglePrice = (item: any) => {
  let singlePrice: number = 0;
  singlePrice += item?.catalogItem?.price * item?.quantity;

  return formatPrice(singlePrice);
};
