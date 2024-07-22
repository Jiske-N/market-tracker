import { createContext, useEffect, useState } from "react";
import { IThemeContext, ThemeMode } from "./types";
import { Theme, ThemeProvider, useMediaQuery } from "@mui/material";
import { AppLightTheme, AppDarkTheme } from "./theme";

export const ThemeContext = createContext<IThemeContext | null>(null);

type Props = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {

// export const ThemeContextProvider: React.FunctionComponent<
//     React.PropsWithChildren
// > = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.System);
    const [theme, setTheme] = useState<Theme>(AppLightTheme);

    const systemTheme: Exclude<ThemeMode, ThemeMode.System> = useMediaQuery("(prefers-color-scheme: dark") ? ThemeMode.Dark : ThemeMode.Light

    useEffect(() => {
        switch (themeMode) {
            case ThemeMode.Light:
                setTheme(AppLightTheme)
                break;
        
                case ThemeMode.Dark:
                    setTheme(AppDarkTheme)
                    break;
                    
            case ThemeMode.System:
                switch (systemTheme) {
                    case ThemeMode.Light:
                        setTheme(AppLightTheme)
                        break;
                case ThemeMode.Dark:
                    setTheme(AppDarkTheme)
                        break;
                }
                break;
            default:
                setTheme(AppLightTheme)
                break;
        }
    }, [themeMode, systemTheme])
    const switchThemeMode = (mode: ThemeMode) => {
        setThemeMode(mode)
    }
    return <ThemeContext.Provider value={{themeMode, switchThemeMode}}><ThemeProvider theme={theme}>{children}</ThemeProvider></ThemeContext.Provider>;
};
