import { Box, CircularProgress } from '@mui/material';

type propType = {
  size?: number;
  thickness?: number;
};
const SplashScreen: React.FC<propType> = ({ size = 70, thickness = 5 }) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <CircularProgress size={size} thickness={thickness} />
    </Box>
  );
};

export default SplashScreen;
