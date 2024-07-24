import { FieldErrors } from "react-hook-form";

export interface DateInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
}
