import { Box, Tab, Tabs, Typography, List, ListItem, ListItemText, Switch } from "@mui/material";
import { useState } from "react";

const tabData = [
    {
        label: "Routing Configuration",
        permissions: ["Route1", "Route2"],
    },
    {
        label: "Routing Timer Configuration",
        permissions: ["Route3", "Route4"],
    },
    {
        label: "User Management",
        permissions: ["Create User", "Edit User", "Delete User"],
    },
    {
        label: "Report Access",
        permissions: ["Daily Report", "Weekly Report", "Monthly Report"],
    },
];
function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
export default function RolePermission() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <>
            <Typography sx={{ fontWeight: "bold", fontFamily: "sans-serif", fontSize: "18px", marginTop: "30px", marginBottom: "20px" }}>Assign Permissions</Typography>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%', width: "100%" }}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderRight: 1, borderColor: 'var(--color-secondary)' }}
                >
                    {tabData.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            {...a11yProps(index)}
                            sx={{
                                fontSize: '16px',
                                color: 'var(--color-secondary)',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                paddingY: 1,
                                alignItems: "flex-start",
                                '&.Mui-selected': {
                                    color: 'var(--color-primary)',
                                },
                            }}
                        />
                    ))}
                </Tabs>
                {tabData.map((tab, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        <Box sx={{ display: "flex", alignItems: "center",width:"100%", justifyContent: "space-between" }}>
                            <Typography  color="var(--color-primary)" sx={{fontSize: '16px',fontWeight: '600px'}}>
                                {tab.label}
                            </Typography>
                            <Switch />
                        </Box>

                        <List>
                            {tab.permissions.map((permission, id) => (
                                <ListItem key={id} disablePadding>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                        <ListItemText primary={permission} />
                                        <Switch />
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                ))}

            </Box>


        </>
    );
}