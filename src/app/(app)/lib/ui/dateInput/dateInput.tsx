"use client";
import { Box, Input, Text } from "@chakra-ui/react";
import { DateInputProps } from "./model";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput: React.FC<DateInputProps> = ({
  type,
  label,
  name,
  placeholder,
  errors,
}) => {
  const { control } = useFormContext();

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
      <Box w="100%">
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              placeholderText={placeholder}
              onChange={onChange}
              selected={value}
              minDate={new Date()}
              isClearable
              showYearDropdown
              showMonthDropdown
              scrollableMonthYearDropdown
              scrollableYearDropdown
              customInput={
                <Input
                  w="100%"
                  h="50px"
                  placeholder={placeholder}
                  focusBorderColor="white"
                  color="white"
                  fontFamily="Futura"
                />
              }
            />
          )}
        />
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

export default DateInput;
