/* eslint-disable react/jsx-props-no-spreading */
import { Field, ErrorMessage, useFormikContext } from "formik";
import { TextField } from "@mui/material";

//  Number component to accept 0-9
type MuiAutoCompleteProps = {
  name: string;
  label: string;
  disabled?: boolean;
  onChange?: (event: { target: { name: string; value: any } }) => void;
  errors: Record<string, any>;
  touched: Record<string, boolean | undefined>;
  fullWidth?: boolean;
  required?: boolean;
};
const NumericField = ({
  name,
  errors,
  touched,
  disabled,
  required,
  fullWidth = true,
}: MuiAutoCompleteProps) => {
  const { setFieldValue } = useFormikContext();

  const handleInputChange = (e: { target: { value: string } }) => {
    // Regex to allow numbers only
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFieldValue(name, e.target.value);
    }
  };

  return (
    <Field
      as={TextField}
      name={name}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      autoComplete="off"
      variant="outlined"
      onChange={handleInputChange}
      inputProps={{ maxLength: 15 }}
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
    />
  );
};

export default NumericField;
