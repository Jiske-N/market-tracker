// import * as React from 'react'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';


// export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });


// const [mode, setMode] = React.useState<'light' | 'dark'>('light');
// const colorMode = React.useMemo(
//   () => ({
//     toggleColorMode: () => {
//       setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//     },
//   }),
//   [],
// );


// const theme = React.useMemo(
//   () =>
//     createTheme({
//       palette: {
//         mode,
//       },
//     }),
//   [mode],
// );

import React from 'react';

export const useColorMode = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const setTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return { colorMode, setTheme };
};