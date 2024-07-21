import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { ThemeContextProvider } from "./theme/index";

function App() {
    return (
        <>
            <div className="app">
                <ThemeContextProvider>
                    <CssBaseline />
                    <Outlet />
                </ThemeContextProvider>
            </div>
        </>
    );
}

export default App;
