import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

type SubmitBtnProps = {
  disabled?: boolean;
  disableIsSubmit?: any;
  sx?: string;
  children: React.ReactNode;
  isNoDirty?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  className?: string;
  component?: any;
};

const SubmitBtn: React.FC<SubmitBtnProps> = ({
  disabled,
  children,
  isNoDirty,
  size = 'small',
  variant = 'outlined',
  className = 'normal-case px-2 py-1 bg-blue-primaryColor text-white hover:bg-white hover:text-blue-primaryColor focus:outline-none disabled:bg-blue-100',
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { dirty, isSubmitting } = useFormikContext();

  useEffect(() => {
    // setIsDisabled(isSubmitting || disabled);
  }, [isSubmitting, disabled]);

  return (
    <Button className={className} variant={variant} size={size} type="submit" disabled={isDisabled}>
      {children}
    </Button>
  );
};

export default SubmitBtn;
