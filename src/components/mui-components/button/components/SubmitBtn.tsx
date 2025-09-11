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
  typeSubmit?: boolean;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  disabled,
  children,
  isNoDirty,
  disableIsSubmit,
  size = 'small',
  variant = 'contained',
  sx,
  className = '!normal-case !bg-[var(--color-primary)] !text-white hover:!bg-[var(--color-accent)] hover:!text-[var(--color-primary)] disabled:!bg-gray-300 disabled:!text-gray-500',
  typeSubmit,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { dirty, isSubmitting, values, initialValues } = useFormikContext();
  useEffect(() => {
    if (typeSubmit) {
      if (isSubmitting) {
        setIsDisabled(true);
      }
    } else if (!disableIsSubmit) {
      if (disabled) {
        setIsDisabled(true);
      } else if (isSubmitting) {
        setIsDisabled(true);
      } else if (!dirty && !isSubmitting && !isNoDirty) {
        setIsDisabled(true);
      } else if (isNoDirty) setIsDisabled(false);
    }
    return () => {
      if (isSubmitting && !dirty) {
        setIsDisabled(false);
      } else if (!dirty) {
        setIsDisabled(false);
      } else if (isSubmitting) {
        setIsDisabled(false);
      } else if (typeSubmit) setIsDisabled(false);
    };
  }, [isSubmitting, dirty, isNoDirty, disabled, disableIsSubmit, typeSubmit, values]);
  return (
    <Button variant={variant} size={size} type="submit" sx={sx} disabled={isDisabled} disableElevation disableRipple className={className}>
      {children}
    </Button>
  );
};

export default SubmitBtn;
