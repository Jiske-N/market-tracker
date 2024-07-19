// TEMPORARY DARK MODE ONLY
export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // light green
    100: "#d0fcf4",
    200: "#a0f9e9",
    300: "#71f5de",
    400: "#41f2d3",
    500: "#12efc8",
    600: "#0ebfa0",
    700: "#0b8f78",
    800: "#076050",
    900: "#043028",
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#8884d8",
  },
  background: {
    light: "#2d2d34",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};

// ____________________________________________________________________________________________________________________________

// SET UP LIGHT/DARK MODE LATER
// export const tokens = {
//   // 9 different shades or variations of each colour below
//   // shades can be generated with tailwind.shades
//   grey: {
//     0: "#FFFFFF",
//     10: "#F6F6F6",
//     50: "#F0F0F0",
//     100: "#E0E0E0",
//     200: "#C2C2C2",
//     300: "#A3A3A3",
//     400: "#858585",
//     500: "#666666",
//     600: "#4D4D4D",
//     700: "#333333",
//     800: "#1A1A1A",
//     900: "#0A0A0A",
//     1000: "#000000",
//   },
//   primary: {
//     50: "#E6FBFF",
//     100: "#CCF7FE",
//     200: "#99EEFD",
//     300: "#66E6FC",
//     400: "#33DDFB",
//     500: "#00D5FA",
//     600: "#00A0BC",
//     700: "#006B7D",
//     800: "#00353F",
//     900: "#001519",
//   },
// };
  
//   // mui theme settings
//   export const themeSettings = {
//       palette: {
//               // palette values for dark mode
//               primary: {
//                 dark: tokens.primary[200],
//                 main: tokens.primary[500],
//                 light: tokens.primary[800],
//               },
//               neutral: {
//                 dark: tokens.grey[100],
//                 main: tokens.grey[200],
//                 mediumMain: tokens.grey[300],
//                 medium: tokens.grey[400],
//                 light: tokens.grey[700],
//               },
//               background: {
//                 default: tokens.grey[900],
//                 alt: tokens.grey[800],
//               },
//       },
//     typography: {
//       fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//       fontSize: 12,
//       h1: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 32,
//       },
//       h2: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 24,
//       },
//       h3: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 20,
//         fontWeight: 800,
//       },
//       h4: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 14,
//         fontWeight: 600,
//       },
//       h5: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 12,
//         fontWeight: 400,
//       },
//       h6: {
//         fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
//         fontSize: 10,
//       },
//     },
//   };