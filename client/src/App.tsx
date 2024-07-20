import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContextProvider } from "./theme/index";

function App() {
    return (
        <>
            <div className="app">
                <ThemeContextProvider>
                    <CssBaseline />
                    <Navbar />
                    <Outlet />
                </ThemeContextProvider>
            </div>
        </>
    );
}

export default App;
