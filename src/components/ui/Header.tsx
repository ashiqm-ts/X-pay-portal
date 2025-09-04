import { Box, Typography } from "@mui/material";

type HeaderProps = {
  name: string;
};

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Box className="flex items-center px-4 py-4">
     <Typography variant="h6" color="text.primary" fontWeight="600">
        {name}
      </Typography>
    </Box>
  );
};

export default Header;
