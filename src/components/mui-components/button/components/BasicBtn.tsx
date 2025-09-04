import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

const BasicBtn = ({ children, disabled, variant = 'contained',onClick, size = 'small', sx, component, startIcon,...rest }: any) => {
  // const { isSubmitting, setSubmitting } = useFormikContext();
  // const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   setIsDisabled(isSubmitting || disabled);
  // }, [isSubmitting, disabled]);

  // const handleClick = (e: any) => {
  //   e.preventDefault();

  //   if (!isDisabled) {
  //     setSubmitting(true);
  //     if (onClick) {
  //       onClick(e);
  //     }

  //     setTimeout(() => {
  //       setSubmitting(false);
  //     }, 8000);
  //   }
  // };

  return (
    <Button
      variant={variant}
      size={size}
      // disabled={isDisabled} 
      onClick={onClick}
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
      {...rest}
      component={component}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
};

export default BasicBtn;
