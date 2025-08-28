import { Box, CircularProgress } from '@mui/material';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress className="text-blue-primaryColor" size={'70px'} />
      </Box>
    </div>
  );
};

export default SplashScreen;
