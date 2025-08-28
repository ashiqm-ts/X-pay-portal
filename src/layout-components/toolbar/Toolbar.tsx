"use client";

import { logoutAction } from "@/app/actions/auth";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Pill from "@/layout-components/toolbar/Pill";

export default function ToolBar() {
    const [isDark, setIsDark] = useState(true);
    const handleLogout = () => {
        // router.push("/sign-in");
        logoutAction();
    }

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar sx={{ backgroundColor: "white", color: "#2A4947", display: "flex", justifyContent: "space-between", alignItems: "center", padding: 0, margin: 0 }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} >Welcome X-Pay !</Typography>
                <Box className="flex justify-end items-center">
                    {/* <Box className="flex items-center justify-center bg-[#538890] w-[90px] h-[28px] rounded-full">
                        <IconButton disableRipple onClick={() => setIsDark(!isDark)} className="w-[50px] h-full p-0 m-0">
                            <LightModeIcon className={`flex-1 rounded-[10px]  ${isDark ? 'text-[#538890] bg-white' : 'text-white bg-[#538890]'}`} />
                        </IconButton>
                        <IconButton disableRipple onClick={() => setIsDark(!isDark)} className="w-[50px] h-full p-0 m-0">
                            <NightlightIcon className={`flex-1 rounded-[10px]  ${isDark ? 'text-white bg-transparent' : 'text-[#538890] bg-white'}`} />
                        </IconButton>
                    </Box>            */}
                    <Pill />
                    <IconButton disableRipple>
                        <NotificationsOutlinedIcon sx={{ color: "#2A4947", width: "30px", height: "30px" }} />
                    </IconButton>
                    <IconButton disableRipple onClick={handleLogout}>
                        <LogoutIcon sx={{ color: "#2A4947" }} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}