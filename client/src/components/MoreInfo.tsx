import {
    Box,
    Typography,
    Button,
    Container,
    TextField,
    Grid,
    useTheme,
} from "@mui/material";

const MoreInfo = () => {
    const { palette } = useTheme();

    // not needed at this stage
    // const [email, setEmail] = useState("");
    // setEmail("");

    const handleClick = () => {
        alert(`There is no privacy statement!`);
    };

    return (
        <Box
            sx={{
                width: "100%",
                py: 8,
                px: 2,
                backgroundColor: palette.common.black,
                color: palette.common.white,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={8}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                py: 2,
                                fontSize: {
                                    xs: "2rem",
                                    sm: "3rem",
                                    md: "4rem",
                                },
                            }}
                        >
                            Want more info on maximising your returns?
                        </Typography>
                        <Typography>
                            Join our mailing list and stay up to date.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Box
                            display="flex"
                            flexDirection={{ xs: "column", sm: "row" }}
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                        >
                            {/* turn into form to add to mailing list database */}
                            <TextField
                                //   value={email}
                                name="email"
                                sx={{
                                    backgroundColor: palette.common.white,
                                    borderRadius: 1,
                                    flex: 1,
                                    mr: { sm: 2 },
                                    mb: { xs: 2, sm: 0 },
                                }}
                                type="email"
                                placeholder="Coming Soon"
                                InputProps={{
                                    style: { color: palette.common.black },
                                }}
                            />
                            <Button
                                disabled
                                sx={{
                                    backgroundColor: palette.text.secondary,
                                    color: palette.common.black,
                                    borderRadius: 1,
                                    fontWeight: "bold",
                                    width: 200,
                                    px: 4,
                                    py: 2,
                                }}
                            >
                                Join Now
                            </Button>
                        </Box>
                        <Typography mt={2}>
                            We care about the protection of your data. Read our{" "}
                            <Typography
                                component="span"
                                onClick={handleClick}
                                sx={{
                                    color: palette.text.secondary,
                                    "&:hover": {
                                        color: palette.secondary.light,
                                        cursor: "pointer",
                                    },
                                }}
                            >
                                Privacy Policy.
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MoreInfo;
