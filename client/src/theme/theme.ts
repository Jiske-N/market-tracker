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
            primary: "#FFFFFF",
            secondary: "#00df9a",
        },
        secondary: {
            main: "#9e9e9e",
        },
        background: {
            default: "#000300",
            paper: "#000",
        },
        common: {
            white: "#FFFFFF",
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
