"use client";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Links } from "@/layout-components/sidebar/RouteLink";

export default function Sidebar1() {
  const pathname = usePathname();

  const activeItemStyle = {
    pl: 2,
    ml: 2,
    "&.Mui-selected": {
      backgroundColor: "#538890",
      color: "#FFF",
      // borderTopLeftRadius: 0,
      // borderBottomLeftRadius: 0,
      // borderTopRightRadius: 0,
      // borderBottomRightRadius: 0,
    },

    "&.Mui-selected:hover": {
      backgroundColor: "#E6F1EB",
    },
  };
  return (
    <aside className="fixed left-0 top-0 w-57 h-screen bg-[#FFFFFF] text-[#538890] z-10">
      <img src="/logo.png" alt="" width="140px" height="64px" style={{ objectFit: 'contain', margin: "auto", padding: "0 25px" }} />
      <Box className="flex flex-col justify-center items-center">
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>User Name</Typography>
        <Typography sx={{ fontSize: "12px" }}>user@techswing.com</Typography>
      </Box>

      <List component="nav">
        {Links.map((item) => {
          // const hasChildren = !!item.children;
          // const isChildActive =
          //   hasChildren && item.children.some((child) => pathname === child.to);

          return (
            <div key={item.label}>

              <ListItemButton
                component={Link}
                href={item.to || "#"}
                selected={pathname === item.to}
                sx={activeItemStyle}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={{ fontSize: "12px" }}>
                      {item.label}
                    </Typography>
                  }
                />
              </ListItemButton>

            </div>
          );
        })}
      </List>
    </aside>
  );
}
