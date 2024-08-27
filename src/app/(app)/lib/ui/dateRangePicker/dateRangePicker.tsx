"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Box, Text } from "@chakra-ui/react";
import { ErrorMessage } from "@hookform/error-message";
import { DateRangePickerProps } from "./model";

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  className,
  type,
  label,
  name,
  placeholder,
  errors,
}) => {
  const { register, setValue } = useFormContext();
  const [date, setDate] = React.useState<DateRange | undefined | any>({});

  React.useEffect(() => {
    register(name);
  }, [register, name]);

  React.useEffect(() => {
    setValue(name, date);
  }, [date, setValue, name]);

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
      <div className={cn("w-full  grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "bg-black border-white-500 h-[50px] text-white justify-start text-left font-bold",
                "hover:bg-black hover:text-white",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <Text variant="XSMEDIUM" color="white" opacity={0.7}>
                  {placeholder}
                </Text>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <ErrorMessage
        errors={errors}
        name="date"
        render={({ message }) => (
          <Text variant="XSREGULAR" color="red.500">
            {message}
          </Text>
        )}
      />
    </Box>
  );
};
