/* eslint-disable react/jsx-props-no-spreading */
import { FormLabel, Switch } from "@mui/material";
import { Field } from "formik";

type MuiAutoCompleteProps = {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: { target: { name: string; value: any } }) => void;
  errors: Record<string, any>;
  touched: Record<string, boolean | undefined>;
};
const MuiSwitch = ({
  name,
  errors,
  touched,
  label,
  disabled,
  onChange,
}: MuiAutoCompleteProps) => {
  return (
    <div>
      <FormLabel>{label}</FormLabel>
      <Field
        as={Switch}
        name={name}
        variant="standard"
        onChange={onChange}
        disabled={disabled}
        errors={errors}
        touched={touched}
      />
    </div>
  );
};

export default MuiSwitch;
