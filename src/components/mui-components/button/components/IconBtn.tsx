import { Button } from '@mui/material';

const IconBtn = ({ children, disabled, className, onClick, variant = 'text', size = 'small', sx={}, component,disableRipple=true, }: any) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled} 
      disableRipple={disableRipple}
      className={className}
      onClick={onClick}
        sx={{
        minWidth: 0,
        padding: 0,
        margin: 0,
        '&:hover': {
          backgroundColor: 'transparent',
        },
        ...sx, 
      }}
      component={component}
    >
      {children}
    </Button>
  );

};

export default IconBtn;