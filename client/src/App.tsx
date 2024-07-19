import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
// theme related unsure if functioning
import { CssBaseline, ThemeProvider, useTheme } from "@mui/material"
import { Outlet } from "react-router-dom"

function App() {
  // theme related unsure if functioning
  const theme = useMemo(() => createTheme(themeSettings), [])
  const {palette } = useTheme()
  
  return (
    <>
      <div className='app'>
        <ThemeProvider theme={theme}>
          <CssBaseline 
          />
          <h1 color={palette.grey[300]}>Hello</h1>
          <Outlet/>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
