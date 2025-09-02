/* eslint-disable react/jsx-props-no-spreading */
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Field, ErrorMessage } from "formik";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type MuiAutoCompleteProps = {
  name: string;
  label: string;
  disabled?: boolean;
  onChange?: (event: { target: { name: string; value: any } }) => void;
  errors: Record<string, any>;
  touched: Record<string, boolean | undefined>;
  fullWidth?: boolean;
  required?: boolean;
  showPassword?: boolean;
  setShowPassword?: (name?: boolean|undefined) => void;
};
const Password = ({
  name,
  label,
  errors,
  touched,
  disabled,
  required,
  onChange,
  fullWidth = true,
  showPassword,
  setShowPassword,
  ...rest
}: MuiAutoCompleteProps) => {
  
  console.log(rest);
  console.log(showPassword)
  console.log(setShowPassword)
  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      fullWidth={fullWidth}
      disabled={disabled}
      required={required}
      autoComplete="off"
      variant="standard"
      type="text"
      helperText={<ErrorMessage name={name} />}
      error={Boolean(errors[name] && touched[name])}
      InputLabelProps={{sx: {color: 'var(--color-secondary)',} }}
      inputProps={{ style: { WebkitTextSecurity: showPassword ? "none" : "disc" } }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword?.(!showPassword)} edge="end">
              {showPassword ? <VisibilityIcon sx={{ color: 'var(--color-secondary)' }}/> : <VisibilityOffIcon sx={{ color: 'var(--color-secondary)' }}/>}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default Password;
