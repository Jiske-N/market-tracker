import Typewriter from "typewriter-effect";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
    const { palette } = useTheme();
    return (
        <Box
            sx={{
                color: "white",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh",
                maxWidth: "800px",
                margin: "auto",
                paddingTop: { xs: "96px", md: "0" },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color: palette.text.secondary,
                    fontWeight: "bold",
                    padding: "0.5rem",
                }}
            >
                YOUR GATEWAY TO FINANCIAL SUCCESS
            </Typography>
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "2.25rem", sm: "3.75rem", md: "4.5rem" },
                    fontWeight: "bold",
                    paddingY: { xs: "0", md: "1.5rem" },
                }}
            >
                Be inspired.
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingY: "1rem",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: "1.25rem", sm: "2.25rem", md: "3rem" },
                        fontWeight: "bold",
                        paddingRight: { xs: "0.5rem", md: "1rem" },
                    }}
                >
                    Fast, flexible data on the
                </Typography>
                {/* can't get style to work */}
                <Typewriter
                    options={{
                        strings: ["NYSE", "NASDAQ", "CHX"],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                        deleteSpeed: 140,
                    }}
                    //   style={{
                    //     fontSize: { xs: '1.25rem', sm: '2.25rem', md: '3rem' },
                    //     fontWeight: 'bold',
                    //     paddingLeft: { xs: '0.5rem', md: '1rem' },
                    //   }}
                />
            </Box>
            <Typography
                variant="h6"
                sx={{
                    fontSize: {
                        xs: "1.25rem",
                        md: "1.5rem",
                    },
                    fontWeight: "bold",
                    color: palette.secondary.light,
                }}
            >
                Unlock new opportunites to achieve financial freedom.
            </Typography>
            <Button
                component={Link}
                to="/sign-up"
                sx={{
                    backgroundColor: palette.text.secondary,
                    color: "black",
                    width: "12.5rem",
                    borderRadius: "0.5rem",
                    fontWeight: "bold",
                    marginY: "1.5rem",
                    marginX: "auto",
                    paddingY: "0.75rem",
                }}
            >
                Get Started
            </Button>
        </Box>
    );
};

export default Hero;
