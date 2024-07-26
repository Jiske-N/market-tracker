import React from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const SubscriptionTiers: React.FunctionComponent<{
    Icon: React.ReactNode;
    title: string;
    price: string;
    features: string[];
    backgroundColor: string;
    textColor: string;
}> = ({ Icon, title, price, features, backgroundColor, textColor }) => {
    const theme = useTheme();

    const handleClick = () => {
        // replace later
        alert(`There are no plans yet, still building features!`);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 4,
                margin: "0 auto",
                borderRadius: "0.5rem",
                boxShadow: theme.shadows[3],
                backgroundColor: backgroundColor,
                transition: "transform 0.3s",
                "&:hover": {
                    transform: "scale(1.05)",
                },
                boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: theme.palette.secondary.light,
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    margin: "0 auto",
                    padding: 1,
                }}
            >
                {Icon}
            </Box>
            <Typography
                variant="h5"
                align="center"
                sx={{ paddingY: 2, fontWeight: "bold" }}
            >
                {title}
            </Typography>
            <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
                {price}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    fontWeight: "bold",
                }}
            >
                {features.map((feature, index) => (
                    <Typography
                        key={index}
                        sx={{
                            paddingY: 1,
                            borderBottom: "1px solid",
                            borderColor: theme.palette.divider,
                            width: "100%",
                            textAlign: "center",
                            margin: "0 1rem",
                        }}
                    >
                        {feature}
                    </Typography>
                ))}
            </Box>
            <Button
                onClick={handleClick}
                sx={{
                    backgroundColor:
                        textColor === theme.palette.secondary.light
                            ? theme.palette.text.secondary
                            : theme.palette.common.black,
                    color:
                        textColor === theme.palette.secondary.light
                            ? theme.palette.common.black
                            : theme.palette.text.secondary,
                    width: 200,
                    borderRadius: 1,
                    fontWeight: "bold",
                    margin: "1.5rem auto",
                }}
            >
                Start Trial
            </Button>
        </Box>
    );
};

const Cards = () => {
    const { palette } = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                py: 10,
                px: 2,
                backgroundColor: palette.common.white,
                boxSizing: "border-box",
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {/* tier 1 */}
                <Grid item xs={12} sm={6} md={4}>
                    <SubscriptionTiers
                        Icon={<PersonIcon sx={{ fontSize: 60 }} />}
                        title="Free Plan"
                        price="$0"
                        features={[
                            "US Listed Stocks",
                            "Single Portfolio",
                            "Up to 10 Shares",
                        ]}
                        backgroundColor={palette.secondary.main}
                        textColor={palette.common.black}
                    />
                </Grid>

                {/* tier 2 */}
                <Grid item xs={12} sm={6} md={4}>
                    <SubscriptionTiers
                        Icon={<GroupIcon sx={{ fontSize: 60 }} />}
                        title="Basic Plan"
                        price="$5"
                        features={[
                            "US Listed Stocks",
                            "Collaborative Portfolios",
                            "Up to 50 Shares",
                        ]}
                        backgroundColor={palette.secondary.light}
                        textColor={palette.common.black}
                    />
                </Grid>

                {/* tier 3 */}
                <Grid item xs={12} sm={6} md={4}>
                    <SubscriptionTiers
                        Icon={<GroupAddIcon sx={{ fontSize: 60 }} />}
                        title="Premium Plan"
                        price="$15"
                        features={[
                            "Globally Listed Stocks",
                            "Collaborative Portfolios",
                            "Unlimited Tracking",
                        ]}
                        backgroundColor={palette.secondary.main}
                        textColor={palette.common.black}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Cards;
