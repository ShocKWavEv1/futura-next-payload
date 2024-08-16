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

const handleShoppingBagList = (shoppingBag: any) => {
  const messageList = shoppingBag?.items?.reduce(
    (result: any, item: any, idx: number) => {
      return `${result} *${item?.catalogItem?.name.toLocaleUpperCase()}* %0a •Unidades: ${
        item?.quantity
      } %0a •Subtotal: ${calculateSinglePrice(item)}mxn %0a`;
    },
    ""
  );
  return messageList;
};

export const handleWhatsAppMessage = (data: any, shoppingBag: any) => {
  const { name, projectName, locationCheckbox, location } = data;
  const messageName = name ? name.toLocaleUpperCase() : "DESCONOCIDO";
  const messageProjectName = !projectName
    ? "DESCONOCIDO"
    : projectName.toLocaleUpperCase();
  const messageCDMX = locationCheckbox ? "CDMX - " : "";
  const messageSpecificLocation = location
    ? `${messageCDMX}${location.toLocaleUpperCase()}`
    : "DESCONOCIDO";
  const messageLocation = locationCheckbox
    ? ` ${messageSpecificLocation}`
    : messageSpecificLocation;

  const messageWhatsApp = `Hola *FVTVRA*🔥, mi nombre es: *${messageName}* estoy interesado en rentar equipo con ustedes para el proyecto: *${messageProjectName}* que grabaremos en *${messageLocation}* esta es la lista de equipo que requiero: %0a%0a ${handleShoppingBagList(
    shoppingBag
  )} %0a *TOTAL DE COTIZACION: ${calculateTotalBagPrice(shoppingBag)}mxn*`;
  return messageWhatsApp;
};
