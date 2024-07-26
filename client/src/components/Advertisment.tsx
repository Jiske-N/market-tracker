import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    useTheme,
} from "@mui/material";
import image from "/vite.svg";
import { Link } from "react-router-dom";

const Advertisment = () => {
    const { palette } = useTheme();
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: palette.common.white,
                py: 8,
                px: 2,
            }}
        >
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6} container justifyContent="center">
                        <img
                            src={image}
                            alt="Nothing yet"
                            style={{ width: 500, margin: "1rem 0" }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box textAlign={{ xs: "center", md: "left" }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: palette.text.secondary,
                                    fontWeight: "bold",
                                }}
                            >
                                AUTOMATIC STOCK VALUATION
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    color: palette.primary.contrastText,
                                    fontWeight: "bold",
                                    py: 2,
                                    fontSize: {
                                        xs: "2rem",
                                        sm: "3rem",
                                        md: "4rem",
                                    },
                                }}
                            >
                                Manage Your Analysis Centrally
                            </Typography>
                            <Typography
                                sx={{ color: palette.primary.contrastText }}
                            >
                                Just enter the numbers from the latest company
                                earnings report and get instant valuation
                                including advanced metrics and customisable buy
                                hold sell recommendations. Coming soon.
                            </Typography>
                            <Button
                                component={Link}
                                to="/sign-up"
                                sx={{
                                    backgroundColor: palette.common.black,
                                    color: palette.text.secondary,
                                    width: 200,
                                    borderRadius: 2,
                                    fontWeight: "bold",
                                    my: 6,
                                }}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Advertisment;
