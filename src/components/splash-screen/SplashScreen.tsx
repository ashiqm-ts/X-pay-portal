import { Box, CircularProgress } from '@mui/material';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress size={70} thickness={4.5} />
      </Box>
    </div>
  );
};

export default SplashScreen;
