import { Box, Typography } from '@mui/material';

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box mb={2}>
      <Typography fontSize={20} fontWeight={600}>
        {name}
      </Typography>
    </Box>
  );
};

export default Header;
