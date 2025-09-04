'use client';
import { logoutAction } from '@/app/actions/auth';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Pill from '@/layout-components/toolbar/Pill';

export default function ToolBar() {
  const handleLogout = () => {
    // router.push("/sign-in");
    logoutAction();
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ backgroundColor: 'white', color: 'var(--color-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0, margin: 0 }}>
        <Typography sx={{ fontSize: '19px', fontWeight: 'bold' }}>Welcome, XPay User</Typography>
        <Box className="flex justify-end items-center">
          {/* <Pill /> */}
          <IconButton disableRipple>
            <NotificationsOutlinedIcon sx={{ color: 'var(--color-primary)', width: '30px', height: '30px' }} />
          </IconButton>
          <IconButton disableRipple onClick={handleLogout}>
            <LogoutIcon sx={{ color: 'var(--color-primary)' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
