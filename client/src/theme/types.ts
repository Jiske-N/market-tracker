export enum ThemeMode {
    Light = "light",
    Dark = "dark",
    System = "system",
}

export interface IThemeContext {
    themeMode: ThemeMode;
    switchThemeMode: (mode: ThemeMode) => void;
}
