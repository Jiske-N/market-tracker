import { Theme, createTheme } from "@mui/material";

export const AppLightTheme: Theme = createTheme({
    palette: {
        text: {
            primary: "#666666",
            secondary: "#333333",
        },
        background: {
            default: "#111111",
        },
    },
});

export const AppDarkTheme: Theme = createTheme({
    palette: {
        mode: "dark",
        text: {
            // white
            primary: "#FFFFFF",
            // green
            secondary: "#00df9a",
        },
        primary: {
            // grey
            light: "#111111",
            main: "#111111",
            dark: "#111111",
            // black
            contrastText: "#000000",
        },
        secondary: {
            // light grey
            main: "#9e9e9e",
            // mid grey
            light: "#666666",
            dark: "#111111",
        },
        background: {
            // near black
            default: "#000300",
            // near black
            paper: "#000",
        },
        common: {
            white: "#FFFFFF",
            black: "#000000",
        },
    },
});

// export const AppLightTheme: Theme = createTheme({
//     palette: {
//         background: {
//             default: "rgb(243, 252, 255)",
//             paper: "rgb(255, 255, 255)",
//         },
//     },
// });

// export const AppDarkTheme: Theme = createTheme({
//     palette: {
//         mode: "dark",
//         background: {
//             default: "rgb(33, 37, 39)",
//             paper: "rgb(41, 44, 49)",
//         },
//     },
// });
