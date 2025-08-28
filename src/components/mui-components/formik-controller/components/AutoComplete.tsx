import { ErrorMessage, useFormikContext, Field } from "formik";
import { FieldProps } from "formik";
import {
  Autocomplete,
  TextField,
  AutocompleteRenderInputParams,
} from "@mui/material";

type OptionType = {
  label: string;
  value: string | number;
};

type MuiAutoCompleteProps = {
  name: string;
  label: string;
  optionsList: OptionType[];
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: { target: { name: string; value: any } }) => void;
  errors: Record<string, any>;
  touched: Record<string, boolean | undefined>;
};

const MuiAutoComplete: React.FC<MuiAutoCompleteProps> = ({
  name,
  errors,
  touched,
  optionsList,
  label,
  required,
  onChange,
  disabled,
}) => {
  const { handleBlur, setFieldValue, initialValues } = useFormikContext<any>();
  // console.log('initialValues', initialValues);
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <Autocomplete
          //  name={field.name}
          value={
            optionsList.find((option) => option.value === field.value) || null
          }
          options={optionsList}
          disabled={disabled}
          getOptionLabel={(option) => option.label}
          // getOptionLabel={(option) => option?.label?.toString?.() || ''}
          onChange={(event, value) => {
            const selectedValue = value?.value ?? initialValues[name];

            setFieldValue(name, selectedValue);
            console.log(value);
            if (onChange) {
              const syntheticEvent = {
                target: {
                  name,
                  value: selectedValue,
                },
              };
              onChange(syntheticEvent);
            }
          }}
          renderOption={(props, option) => (
            <li {...props} key={option?.value}>
              {option?.label}
            </li>
          )}
          onBlur={handleBlur}
          clearOnBlur
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField
              label={label}
              variant="outlined"
              InputProps={params.InputProps}
              InputLabelProps={params.InputLabelProps}
              inputProps={params.inputProps}
              fullWidth
              autoComplete="off"
              required={required}
              disabled={disabled}
              //  onBlur={params.onBlur}
              helperText={<ErrorMessage name={name} />}
              error={Boolean(errors[name] && touched[name])}
            />
          )}
        />
      )}
    </Field>
  );
};

export default MuiAutoComplete;
