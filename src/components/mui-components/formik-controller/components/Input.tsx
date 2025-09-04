/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@mui/material';
import { Field, ErrorMessage } from 'formik';

/** Input
 * Mui TextField component
 */

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
const Input = ({ name, label, errors, touched, disabled, required, onChange, fullWidth = true, ...rest }: MuiAutoCompleteProps) => {
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      // onChange={onChange}
      autoComplete="off"
      variant="standard"
      InputLabelProps={{ sx: { color: 'var(--color-secondary)',fontSize: '13px' } }}
      // InputProps={{ sx: { color: '#538890', fontSize: '14px' } }}
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
      {...rest}
    />
  );
};

export default Input;
