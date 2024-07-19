export const tokens = {
  // 9 different shades or variations of each colour below
  // shades can be generated with tailwind.shades
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
  
  // mui theme settings
  export const themeSettings = {
      palette: {
              // palette values for dark mode
              primary: {
                dark: tokens.primary[200],
                main: tokens.primary[500],
                light: tokens.primary[800],
              },
              neutral: {
                dark: tokens.grey[100],
                main: tokens.grey[200],
                mediumMain: tokens.grey[300],
                medium: tokens.grey[400],
                light: tokens.grey[700],
              },
              background: {
                default: tokens.grey[900],
                alt: tokens.grey[800],
              },
      },
    typography: {
      fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
      },
      h4: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
      },
      h5: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
      },
      h6: {
        fontFamily: ['Roboto', 'Inter', 'Questrial', "sans-serif"].join(","),
        fontSize: 10,
      },
    },
  };