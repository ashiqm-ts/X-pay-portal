import { Button } from '@mui/material';

const GridBtn = ({ children, disabled, className, sx, onClick, variant = 'contained', size = 'smaill' }: any) => {
    return (
        <Button variant={variant} size={size} disabled={disabled} className={className} onClick={onClick}
            sx={{
                textTransform: 'none',
                color: 'var(--color-accent)',
                width: '110px',
                height: '25px',
                borderRadius: "10px",
                backgroundColor: 'var(--color-secondary)',
                '&:hover': {
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-accent1)',
                },
            }}>
            {children}
        </Button>
    );
};

export default GridBtn;
