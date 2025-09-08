import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';

const BasicBtn = ({
  children,
  disabled,
  variant = 'contained',
  size = 'small',
  sx,
  component,
  startIcon,
  onClick,
  className = '!bg-[var(--color-secondary)] !text-white hover:!bg-[var(--color-accent)] hover:!text-[var(--color-primary)] !disabled:bg-[var(--color-accent)]',
  ...rest
}: any) => {
  return (
    <Button variant={variant} size={size} className={className} onClick={onClick} disabled={disabled} {...rest} component={component} startIcon={startIcon}>
      {children}
    </Button>
  );
};

export default BasicBtn;
