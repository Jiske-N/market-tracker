import { Button, Menu, MenuItem } from "@mui/material";
import PaletteIcon from '@mui/icons-material/Palette'
import { useState, useRef, useContext } from "react";
import { ThemeContext } from "../theme/index";
import { IThemeContext, ThemeMode } from "../theme/types";

const ThemeToggle: React.FunctionComponent = () => {
const buttonRef = useRef<HTMLButtonElement>(null)
const [openMenu, setOpenMenu] = useState<boolean>(false)
const {themeMode, switchThemeMode} = useContext(ThemeContext) as IThemeContext

const handleOpen = () => {
    setOpenMenu(true)
}

const handleClose = () => {
    setOpenMenu(false)
}

const handleSwitchTheme = (mode: ThemeMode) => {
    switchThemeMode(mode)
    handleClose()
}

    return (
        <>
        <Button variant="contained" onClick={handleOpen} startIcon={<PaletteIcon/>}>Switch Theme</Button>
        <Menu open={openMenu} anchorEl={buttonRef.current} onClose={handleClose}>
            <MenuItem onClick={() => handleSwitchTheme(ThemeMode.Light)} selected={themeMode === ThemeMode.Light}>Light</MenuItem>
            <MenuItem onClick={() => handleSwitchTheme(ThemeMode.Dark)} selected={themeMode === ThemeMode.Dark}>Dark</MenuItem>
            <MenuItem onClick={() => handleSwitchTheme(ThemeMode.System)} selected={themeMode === ThemeMode.System}>System</MenuItem>
            </Menu></>
    )
}

export default ThemeToggle