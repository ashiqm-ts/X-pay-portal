import { Box, Typography } from '@mui/material';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box mb={2}>
      <Typography    fontWeight="600" sx={{ fontSize: '1.1rem' }}>
        {name}
      </Typography>
    </Box>
  );
};

export default Header;
