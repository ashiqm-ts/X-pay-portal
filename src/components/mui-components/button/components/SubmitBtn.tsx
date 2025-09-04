import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

type SubmitBtnProps = {
  disabled?: boolean;
  disableIsSubmit?: any;
  sx?: object;
  children: React.ReactNode;
  isNoDirty?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  component?: any;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({ disabled, children, isNoDirty, size = 'small', variant = 'contained', sx }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  // const { dirty, isSubmitting } = useFormikContext();

  // useEffect(() => {
  //   // setIsDisabled(isSubmitting || disabled);
  // }, [isSubmitting, disabled]);

  return (
    <Button
      variant={variant}
      size={size}
      type="submit"
      sx={{
        textTransform: 'none',
        backgroundColor: 'var(--color-secondary)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary)',
        },
        '&:disabled': {
          backgroundColor: 'var(--color-accent)',
        },
        ...sx,
      }}
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
};

export default SubmitBtn;
