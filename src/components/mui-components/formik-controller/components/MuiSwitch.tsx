'use client';

import { Switch, FormHelperText, Box, Typography } from '@mui/material';
import { useField } from 'formik';

type MuiSwitchProps = {
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (event: { target: { name: string; value: boolean } }) => void;
};

const MuiSwitch: React.FC<MuiSwitchProps> = ({ name, label, disabled, required, onChange }) => {
  const [field, meta, helpers] = useField({ name, type: 'checkbox' });

  return (
    <Box mt={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2" fontWeight={500} color="var(--color-primary)">
          {label}
          {required ? ' *' : ''}
        </Typography>

        <Switch
          {...field}
          checked={Boolean(field.value)}
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: 'var(--color-secondary)',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: 'var(--color-secondary)',
            },
            '& .MuiSwitch-track': {
              backgroundColor: '#ccc',
            },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            helpers.setValue(e.target.checked);
            if (onChange) onChange({ target: { name, value: e.target.checked } });
          }}
          disabled={disabled}
        />
      </Box>

      {meta.touched && meta.error && <FormHelperText error>{meta.error}</FormHelperText>}
    </Box>
  );
};

export default MuiSwitch;
