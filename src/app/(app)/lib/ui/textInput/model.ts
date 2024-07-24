import { FieldErrors } from "react-hook-form";

export interface TextInputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  errors: FieldErrors;
}
