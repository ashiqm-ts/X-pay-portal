import { Box, CircularProgress } from '@mui/material';

const SplashScreen: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="90vh" width="90vw" bgcolor="var(--color-primary)">
      <CircularProgress size={70}  thickness={4.5} sx={{ color: 'var(--color-accent)' }} />
    </Box>
  );
};

export default SplashScreen;
