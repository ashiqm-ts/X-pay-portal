/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";

/** DropDown
 * Mui TextField with select prop component
 */
type MuiAutoCompleteProps = {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: { target: { name: string; value: any } }) => void;
  errors: Record<string, any>;
  touched: Record<string, boolean | undefined>;
  children: React.ReactNode;

};
const DropDown = ({
  name,
  errors,
  touched,
  label,
  required,
  onChange,
  disabled,
  children,
}: MuiAutoCompleteProps) => {
  return (
    <Field
      as={TextField}
      name={name}
      fullWidth
      required={required}
      select
      onChange
      disabled
      autoComplete="off"
      variant="standard"
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
    >
      {children}
    </Field>
  );
};

export default DropDown;
