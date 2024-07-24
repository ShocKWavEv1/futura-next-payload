// TextInput.tsx
"use client";
import { Box, Input, Text } from "@chakra-ui/react";
import { TextInputProps } from "./model";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const TextInput: React.FC<TextInputProps> = ({
  type,
  label,
  name,
  placeholder,
  errors,
}) => {
  const { register } = useFormContext();

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="flex-start"
      gap="10px"
      flexDirection="column"
    >
      <Text variant="MDMEDIUM" color="white">
        {label}
      </Text>
      <Input
        w="100%"
        h="50px"
        placeholder={placeholder}
        focusBorderColor="white"
        color="white"
        fontFamily="Futura"
        type={type}
        {...register(name)}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }: { message: any }) => (
          <Text variant="XSREGULAR" color="red.500">
            {message}
          </Text>
        )}
      />
    </Box>
  );
};

export default TextInput;
