import { Box } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.alt",
                color: "text.primary",
            }}
        >
            <header>
                <h1>Market Tracker</h1>
                <ThemeToggle />
                <nav>
                    <ul>
                        <li>
                            {/* replace these with styled components in the future! */}
                            <Link to="/sign-up">Signup</Link>
                        </li>
                        <li>
                            <Link to="/log-in">Login</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Box>
    );
};

export default Header;
