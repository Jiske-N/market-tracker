import { Box } from "@mui/material";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
            }}
        >
            <ThemeToggle />
        </Box>
    );
};

export default Header;
