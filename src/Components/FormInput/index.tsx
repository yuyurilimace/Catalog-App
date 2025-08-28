import { TextField, type TextFieldProps } from "@mui/material";
import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

type FormInputProps<T extends FieldValues> = UseControllerProps<T> &
  TextFieldProps;

const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const { field, fieldState } = useController(props);
  const hasError = !!fieldState.error;
  return (
    <TextField
      {...field}
      {...props}
      error={hasError}
      helperText={fieldState.error?.message}
    />
  );
};

export { FormInput };
