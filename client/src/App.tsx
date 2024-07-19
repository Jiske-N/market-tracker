import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { useMemo } from "react"
// import { themeSettings } from "./theme"
// theme related unsure if functioning
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import getDesignTokens from './theme/theme';
// import { useThemeContext } from "./theme/ThemeContextProvider"

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  const darkModeTheme = createTheme(getDesignTokens('dark'));
  
  return (
    <>
      <div className='app'>
        <ThemeProvider theme={darkModeTheme}>
          <CssBaseline />
          <Navbar/>
          {/* <h1 color={palette.grey[300]}>Hello</h1> */}
          <Outlet/>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
