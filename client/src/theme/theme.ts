import { Theme, createTheme } from "@mui/material";

// first test variation
export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#E6FBFF",
        100: "#CCF7FE",
        200: "#99EEFD",
        300: "#66E6FC",
        400: "#33DDFB",
        500: "#00D5FA",
        600: "#00A0BC",
        700: "#006B7D",
        800: "#00353F",
        900: "#001519",
    },
};

//   second test variation
// export const colorTokens = {
//     grey: {
//         0: "#FFFFFF",
//         10: "#F6F6F6",
//         50: "#F0F0F0",
//         100: "#f0f0f3",
//         200: "#e1e2e7",
//         300: "#d1d3da",
//         400: "#c2c5ce",
//         500: "#b3b6c2",
//         600: "#8f929b",
//         700: "#6b6d74",
//         800: "#48494e",
//         900: "#242427",
//     },
//     primary: {
//         50: "#E6FBFF",
//         100: "#d0fcf4",
//         200: "#a0f9e9",
//         300: "#71f5de",
//         400: "#41f2d3",
//         500: "#12efc8",
//         600: "#0ebfa0",
//         700: "#0b8f78",
//         800: "#076050",
//         900: "#043028",
//     },
// };

export const AppLightTheme: Theme = createTheme({
    palette: {
        primary: {
            dark: colorTokens.primary[700],
            main: colorTokens.primary[500],
            light: colorTokens.primary[50],
        },
        neutral: {
            dark: colorTokens.grey[700],
            main: colorTokens.grey[500],
            mediumMain: colorTokens.grey[400],
            medium: colorTokens.grey[300],
            light: colorTokens.grey[50],
        },
        background: {
            default: colorTokens.grey[10],
            alt: colorTokens.grey[0],
        },
    },
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            dark: colorTokens.primary[200],
            main: colorTokens.primary[500],
            light: colorTokens.primary[800],
        },
        neutral: {
            dark: colorTokens.grey[100],
            main: colorTokens.grey[200],
            mediumMain: colorTokens.grey[300],
            medium: colorTokens.grey[400],
            light: colorTokens.grey[700],
        },
        background: {
            default: colorTokens.grey[900],
            alt: colorTokens.grey[800],
        },
    },
});
