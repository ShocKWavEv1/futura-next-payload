import { FieldErrors } from "react-hook-form";

export interface DateRangePickerProps {
  className?: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
}
