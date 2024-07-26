import React from "react";
import {
    Box,
    Typography,
    Grid,
    IconButton,
    useTheme,
    Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                maxWidth: "1240px",
                margin: "0 auto",
                paddingY: 4,
                paddingX: 2,
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: palette.text.secondary,
                        }}
                    >
                        MARKET TRACKER
                    </Typography>
                    <Typography variant="body2" sx={{ py: 2 }}>
                        MIT License Copyright (c) 2024 JN
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            maxWidth: "75%",
                            my: 2,
                        }}
                    >
                        <IconButton
                            component={Link}
                            href="https://www.facebook.com"
                        >
                            <FacebookIcon
                                sx={{
                                    fontSize: 30,
                                    color: palette.text.secondary,
                                }}
                            />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="https://www.instagram.com"
                        >
                            <InstagramIcon
                                sx={{
                                    fontSize: 30,
                                    color: palette.text.secondary,
                                }}
                            />
                        </IconButton>
                        <IconButton
                            component={Link}
                            href="https://www.twitter.com"
                        >
                            <TwitterIcon
                                sx={{
                                    fontSize: 30,
                                    color: palette.text.secondary,
                                }}
                            />
                        </IconButton>
                        <IconButton component={Link} href="https://github.com">
                            <GitHubIcon
                                sx={{
                                    fontSize: 30,
                                    color: palette.text.secondary,
                                }}
                            />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "Bold",
                                    color: palette.common.white,
                                }}
                            >
                                Solutions
                            </Typography>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Analytics
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Insights
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: palette.common.white,
                                }}
                            >
                                Support
                            </Typography>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Pricing
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Documentation
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: palette.common.white,
                                }}
                            >
                                Company
                            </Typography>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        About
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Blog
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: "bold",
                                    color: palette.common.white,
                                }}
                            >
                                Legal
                            </Typography>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Policy
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="body2" sx={{ py: 1 }}>
                                        Terms
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
