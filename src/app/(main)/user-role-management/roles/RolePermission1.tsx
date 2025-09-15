import { Box, Button, ListItemText, Menu, MenuItem, Paper, Switch, Typography } from "@mui/material";
import { useState } from "react";

const menuConfig: Record<string, { label: string; switches: string[] }> = {
    routing: {
        label: "Routing Configuration",
        switches: ["Route 1", "Route 2"],
    },
    timer: {
        label: "Routing Timer Configuration",
        switches: ["Route 3", "Route 4"],
    },
    firewall: {
        label: "Firewall Configuration",
        switches: ["Rule 1", "Rule 2", "Rule 3"],
    },
    routing1: {
        label: "Routing Configuration",
        switches: ["Route 1", "Route 2"],
    },
    timer1: {
        label: "Routing Timer Configuration",
        switches: ["Route 3", "Route 4"],
    },
};

export default function RolePermission1() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [activeMenu, setActiveMenu] = useState<null | string>(null);

    const handleOpenMenu = (menuKey: string) => (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(menuKey);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    return (
        <>
            <Typography sx={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "18px", marginY: "30px" }}>
                Assign Permissions
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", gap: 1 }}>
                {Object.entries(menuConfig).map(([key, { label }]) => (
                    <Button key={key} onClick={handleOpenMenu(key)} sx={{ textTransform: "none", color: activeMenu == key ? "var(--color-primary)" : "var(--color-secondary)", fontSize: "16px" }}>
                        {label}
                    </Button>
                ))}
            </Box>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}
                slotProps={{
                    paper: {
                        sx: {
                            width: '600px',
                            maxHeight: "400px",
                        }
                    }}}>
                {activeMenu && menuConfig[activeMenu].switches.map((item, index) => (
                        <MenuItem key={index}>
                            <ListItemText>{item}</ListItemText>
                            <Switch />
                        </MenuItem>
                    ))}
            </Menu>
        </>
    );
}
