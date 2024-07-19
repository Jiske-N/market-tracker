import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
    const theme = useTheme();

    return (
        <Box  sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,}}>
        <h1>Header {theme.palette.mode}</h1>
        </Box>
    )
};

export default Header;