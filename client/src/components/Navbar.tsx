import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItemText,
    Typography,
    useTheme,
    useMediaQuery,
    ListItemButton,
    ListItem,
    Box,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpen from "@mui/icons-material/MenuOpen";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // toggle drawer
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <AppBar
                sx={{
                    // make the header black
                    // backgroundImage: 'unset',
                    paddingX: 2,
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            // maxWidth: "1240px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontWeight: "bold",
                            }}
                        >
                            MARKET TRACKER
                        </Typography>

                        {isMobile && (
                            <>
                                <IconButton onClick={handleNav}>
                                    {nav ? (
                                        <MenuOpen fontSize="small" />
                                    ) : (
                                        <MenuIcon fontSize="small" />
                                    )}
                                </IconButton>
                                <Drawer
                                    anchor="left"
                                    open={nav}
                                    onClose={handleNav}
                                    sx={{
                                        ".MuiDrawer-paper": {
                                            width: "60%",
                                            backgroundColor:
                                                theme.palette.background
                                                    .default,
                                            color: "white",
                                            borderRight: "1px solid #9e9e9e",
                                        },
                                    }}
                                >
                                    <Toolbar>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: theme.palette.text
                                                    .secondary,
                                                fontWeight: "bold",
                                                padding: 2,
                                            }}
                                        >
                                            MARKET TRACKER
                                        </Typography>
                                    </Toolbar>
                                    <List>
                                        <ListItemButton
                                            component={Link}
                                            to="/log-in"
                                            sx={{
                                                borderBottom:
                                                    "1px solid #9e9e9e",
                                                padding: 2,
                                            }}
                                        >
                                            <ListItemText primary="Login" />
                                        </ListItemButton>
                                        <ListItemButton
                                            component={Link}
                                            to="/sign-up"
                                            sx={{
                                                borderBottom:
                                                    "1px solid #9e9e9e",
                                                padding: 2,
                                            }}
                                        >
                                            <ListItemText primary="Signup" />
                                        </ListItemButton>
                                    </List>
                                </Drawer>
                            </>
                        )}

                        {!isMobile && (
                            <List sx={{ display: "flex" }}>
                                <ListItemButton
                                    component={Link}
                                    to="/log-in"
                                    sx={{ padding: 2 }}
                                >
                                    <ListItemText primary="Login" />
                                </ListItemButton>
                                <ListItem
                                    component={Link}
                                    to="/sign-up"
                                    sx={{ padding: 2 }}
                                >
                                    <Button
                                        sx={{
                                            backgroundColor:
                                                theme.palette.common.white,
                                            color: theme.palette.common.black,
                                            width: "6rem",
                                            borderRadius: "0.5rem",
                                            fontWeight: "bold",
                                            marginX: "auto",
                                            paddingY: "0.5rem",
                                        }}
                                    >
                                        Signup
                                    </Button>
                                </ListItem>
                            </List>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
