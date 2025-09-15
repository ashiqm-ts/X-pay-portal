'use client';

import { useState, useCallback, Fragment, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Typography, Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Links } from '@/layout-components/sidebar/RouteLink';

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

   const handleToggle = useCallback((label: string) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  }, []);

   const activeItemStyle = useMemo(
    () => ({
      ml: 1,
      '&:hover': {
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-primary)',
      },
      '&.Mui-selected': {
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--background)',
      },
      '&.Mui-selected:hover': {
        backgroundColor: 'var(--color-secondary)',
        opacity: 0.9,
      },
    }),
    []
  );

  return (
    <aside className="left-0 top-0 h-screen bg-white text-[var(--color-secondary)] flex flex-col">
       <Box className="flex justify-center py-4 shrink-0">
        <img src="/logo.png" alt="logo" width={140} height={64} loading="lazy" style={{ objectFit: 'contain' }} />
      </Box>

       <Box className="flex-1 overflow-y-auto">
        <List component="nav">
          {Links.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isChildActive = hasChildren && item.children?.some((child) => pathname === child.to);

            return (
              <Fragment key={item.label}>
                {hasChildren ? (
                  <>
                     <ListItemButton onClick={() => handleToggle(item.label)} selected={isChildActive} sx={{ ml: 1 }}>
                      <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto', mr: 1 }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={<Typography fontSize={12}>{item.label}</Typography>} />
                      {openMenu === item.label ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                     <Collapse in={openMenu === item.label} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children?.map(
                          (child) =>
                            child.to && (
                              <ListItemButton key={child.to} component={Link} href={child.to} selected={pathname === child.to} sx={{ ...activeItemStyle, ml: 2,pl:3 }}>
                                <ListItemIcon
                                  sx={{
                                    color: 'inherit',
                                    minWidth: 'auto',
                                    mr: 1,
                                  }}
                                >
                                  {child.icon}
                                </ListItemIcon>
                                <ListItemText primary={<Typography fontSize={12}>{child.name}</Typography>} />
                              </ListItemButton>
                            )
                        )}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton component={Link} href={item.to || '#'} selected={pathname === item.to} sx={activeItemStyle}>
                    <ListItemIcon sx={{ color: 'inherit', minWidth: 'auto', mr: 1 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={<Typography fontSize={12}>{item.label}</Typography>} />
                  </ListItemButton>
                )}
              </Fragment>
            );
          })}
        </List>
      </Box>
    </aside>
  );
}
