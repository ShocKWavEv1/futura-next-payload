"use client";
import { Box, Button } from "@chakra-ui/react";
import { CheckoutFormDataProps } from "./model";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/app/(app)/lib/ui/textInput/textInput";
import CheckBoxinput from "@/app/(app)/lib/ui/checkboxInput/checkBoxInput";
import AlertMessage from "@/app/(app)/lib/ui/alertMessage/alertMessage";
import { formSchema } from "@/app/(app)/lib/zod/formSchemas/checkoutSchema";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";
import { handleWhatsAppMessage } from "@/app/(app)/utils/utils";
import { DateRangePicker } from "@/app/(app)/lib/ui/dateRangePicker/dateRangePicker";

type FormData = z.infer<typeof formSchema>;

const CheckoutFormData: React.FC<CheckoutFormDataProps> = () => {
  const { form, setFormValue } = useStoreZustand();
  const { shoppingBag } = useStoreShoppingCart();
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: form,
  });
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    setFormValue("form", data);
    const message: any = handleWhatsAppMessage(data, shoppingBag);
    window.open(
      `https://api.whatsapp.com/send?phone=525543416012&text=${message}`
    );
  };

  const watchCheckbox = watch("locationCheckbox");

  return (
    <Box
      w="100%"
      display="flex"
      alignItems={[
        "center",
        "center",
        "flex-start",
        "flex-start",
        "flex-start",
        "flex-start",
      ]}
      justifyContent="flex-start"
      flexDirection="column"
      pt={["30px", "30px", "40px", "40px", "40px", "0px"]}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Box w="100%" display="flex" flexDirection="column" gap="30px">
            <Box w="100%">
              <DateRangePicker />
            </Box>
            <TextInput
              type="text"
              label="Tú Nombre:"
              name="name"
              placeholder="Escribe tu nombre"
              errors={errors}
            />
            <TextInput
              type="text"
              label="Nombre del proyecto:"
              name="projectName"
              placeholder="Nombre del proyecto"
              errors={errors}
            />
            <Box
              w="100%"
              display="flex"
              alignItems="flex-start"
              gap="10px"
              flexDirection="column"
            >
              <CheckBoxinput
                type="checkbox"
                title="Ubicación"
                label="Mi grabación es en CDMX"
                name="locationCheckbox"
                placeholder="Si"
                errors={errors}
              />
              {!watchCheckbox && (
                <AlertMessage
                  message={
                    "Ten en cuenta que tu cotización puede incluir costos adicionales"
                  }
                />
              )}
              <TextInput
                type="text"
                label="Cuéntanos donde vas a grabar?"
                name="location"
                placeholder="Cuéntanos donde vas a grabar?"
                errors={errors}
              />
            </Box>
            <Button type="submit" variant="white" w="100%">
              Enviar Cotización
            </Button>
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default CheckoutFormData;
