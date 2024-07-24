"use client";
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { CheckboxInputProps } from "./model";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const CheckBoxinput: React.FC<CheckboxInputProps> = ({
  title,
  type,
  label,
  name,
  placeholder,
  errors,
}) => {
  const { register } = useFormContext();
  return (
    <Box w="100%" display="flex" flexDirection="column" gap="10px">
      <Text variant="MDMEDIUM" color="white">
        {title}
      </Text>
      <Text variant="XSMEDIUM" color="white">
        {label}
      </Text>
      <Box>
        <Checkbox mt="5px" colorScheme="primary" {...register(name)}>
          <Text variant="XSREGULAR" color="white">
            {placeholder}
          </Text>
        </Checkbox>
      </Box>
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

export default CheckBoxinput;
