import { Typography } from '@mui/material';

type Align = 'left' | 'center' | 'right';
const align: Align = 'center';

const TypographyComponent: React.FC<any> = (props) => {
  const { children, sx = {}, ...rest } = props;
  return (
    <Typography
      sx={
        {
          // fontWeight: 400,
          // fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
          // marginTop: '70px',
          // color: '#538890',
          // ...sx, // allow overrides
          // textAlign:align,
        }
      }
      {...rest}
    >
      {children}
    </Typography>
  );
};
export default TypographyComponent;
