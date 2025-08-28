import { Button } from '@mui/material';

const BasicCancelBtn = ({ children, disabled, className, onClick, variant = 'outlined', size = 'small' }: any) => {
  return (
    <Button variant={variant} size={size} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default BasicCancelBtn;
