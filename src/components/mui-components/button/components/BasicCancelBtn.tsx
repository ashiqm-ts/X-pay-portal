import { Button } from '@mui/material';

const BasicCancelBtn = ({ children, disabled, className, sx, onClick, variant = 'outlined', size = 'small' }: any) => {
  return (
    <Button variant={variant} size={size} disabled={disabled} className={className} onClick={onClick}
      sx={{
        textTransform: 'none',
        color: 'var(--color-primary)',
        // borderColor:'var(--color-accent)'
      }}>
      {children}
    </Button>
  );
};

export default BasicCancelBtn;
