import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

// This button for approve button in maker req
const BasicSubmitBtn = ({ children, disabled, className, onClick, variant = 'contained', size = 'small', sx, component, startIcon }: any) => {
  const { isSubmitting, setSubmitting } = useFormikContext();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setIsDisabled(isSubmitting || disabled);
  }, [isSubmitting, disabled]);

  const handleClick = (e: any) => {
    e.preventDefault();

    if (!isDisabled) {
      setSubmitting(true);
      if (onClick) {
        onClick(e);
      }

      setTimeout(() => {
        setSubmitting(false);
      }, 8000);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      disabled={isDisabled} // Disable button if submitting or manual disabled prop is true
      className="normal-case px-2 py-1 bg-blue-primaryColor text-white hover:bg-white hover:text-blue-primaryColor focus:outline-none disabled:bg-blue-100"
      onClick={handleClick}
      sx={sx}
      component={component}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default BasicSubmitBtn;
