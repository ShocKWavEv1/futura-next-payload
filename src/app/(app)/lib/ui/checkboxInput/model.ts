import { FieldErrors } from "react-hook-form";

export interface CheckboxInputProps {
  title: string;
  type: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
}
