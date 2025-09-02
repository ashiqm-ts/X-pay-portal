"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Box } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Links } from "@/layout-components/sidebar/RouteLink"

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (label: string) => {
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const activeItemStyle = {
    // pl: 2,
    ml: 1,
    "&.Mui-selected": {
      backgroundColor: "var(--color-secondary)",
      color: "var(--background)",
      // borderTopLeftRadius: 0,
      // borderBottomLeftRadius: 0,
      // borderTopRightRadius: 0,
      // borderBottomRightRadius: 0,
    },

    "&.Mui-selected:hover": {
      backgroundColor: "var(--color-accent)",
    },
  };

  return (
    <aside className="left-0 top-0 h-screen bg-[#FFFFFF] text-var(--color-secondary)">
      <img src="/logo.png" alt="logo" width="140px" height="64px" style={{ objectFit: 'contain', margin: "auto", padding: "0 25px" }} />
      <Box className="flex flex-col justify-center items-center">
      </Box>
      <List component="nav">
        {Links.map((item) => {
          const hasChildren = !!item.children;
          const isChildActive =
            hasChildren && item.children?.some((child) => pathname === child.to);
          return (
            <div key={item.label}>
              {hasChildren ? (
                <>
                  <ListItemButton
                    sx={{ ml: 1 }}
                    onClick={() => handleToggle(item.label)}
                  >
                    <ListItemIcon sx={{ color: "inherit", minWidth: "auto", marginRight: 1 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ fontSize: "12px", paddingRight: 0 }}>
                          {item.label}
                        </Typography>
                      }
                    />
                    {open[item.label] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>

                  <Collapse
                    in={open[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children?.map((child) => {
                        if (!child.to) return null;
                        const isChildSelected = pathname === child.to;
                        return (
                          <Link href={child.to} key={child.to} passHref>
                            <ListItemButton
                              selected={isChildSelected}
                              sx={{ ...activeItemStyle, ml: 2 }}
                            >
                              <ListItemIcon sx={{ color: "inherit", minWidth: "auto", marginRight: 1 }}>
                                {child.icon}
                              </ListItemIcon>
                              <ListItemText
                                primary={
                                  <Typography sx={{ fontSize: "12px" }}>
                                    {child.name}
                                  </Typography>
                                }
                              />
                            </ListItemButton>
                          </Link>
                        );
                      })}
                    </List>
                  </Collapse>
                </>
              ) : (
                <ListItemButton
                  component={Link}
                  href={item.to || "#"}
                  selected={pathname === item.to}
                  sx={activeItemStyle}
                >
                  <ListItemIcon sx={{ color: "inherit", minWidth: "auto", marginRight: 1 }}>
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
              )}
            </div>
          );
        })}
      </List>
    </aside>
  );
}
