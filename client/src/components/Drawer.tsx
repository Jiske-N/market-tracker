import React from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const DrawerNav: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100vh",
                position: "fixed",
                top: 0,
                // backgroundColor: theme.palette.background.default
            }}
        >
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.text.secondary,
                        fontWeight: "bold",
                        padding: 2,
                    }}
                >
                    MARKET TRACKER
                </Typography>
                <List>
                    <ListItemButton
                        component={Link}
                        to="/"
                        sx={{
                            borderBottom: "1px solid #9e9e9e",
                            padding: 2,
                        }}
                    >
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        to="/dashboard"
                        sx={{
                            borderBottom: "1px solid #9e9e9e",
                            padding: 2,
                        }}
                    >
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        to="/stock"
                        sx={{
                            borderBottom: "1px solid #9e9e9e",
                            padding: 2,
                        }}
                    >
                        <ListItemText primary="Stock Search" />
                    </ListItemButton>
                </List>
            </Box>
            <Box>
                <List>
                    <ListItemButton
                        component={Link}
                        to="/account-settings"
                        sx={{
                            borderBottom: "1px solid #9e9e9e",
                            padding: 2,
                        }}
                    >
                        <ListItemText primary="Account" />
                    </ListItemButton>
                    <ListItemButton
                        component={Link}
                        to="/account-settings"
                        sx={{
                            padding: 2,
                        }}
                    >
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );
};

export default DrawerNav;
