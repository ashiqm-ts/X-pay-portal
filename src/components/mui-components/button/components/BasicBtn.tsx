import { Button } from '@mui/material';

const BasicBtn = ({
  children,
  disabled,
  variant = 'contained',
  size = 'small',
  sx,
  component,
  startIcon,
  onClick,
  className = '!normal-case !bg-[var(--color-secondary)] !text-white hover:!bg-[var(--color-accent)] hover:!text-[var(--color-primary)] !disabled:bg-[var(--color-accent)]',
  ...rest
}: any) => {
  return (
    <Button variant={variant} size={size} sx={sx} className={className} onClick={onClick} disabled={disabled} {...rest} component={component} startIcon={startIcon}>
      {children}
    </Button>
  );
};

export default BasicBtn;
