import { Card } from '@mui/material';

const CustomCard: React.FC<any> = (props) => {
  const { children, minHeight, ...rest } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
        maxWidth: 1130,
        padding: 2,
        m: 3,
        borderRadius: 0,
        minHeight: minHeight || '500px',
      }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
