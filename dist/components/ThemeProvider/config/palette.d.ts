import { PaletteColor, CommonColors } from '@mui/material/styles';
interface ColorPalette extends PaletteColor {
    lightest?: string;
    lighter?: string;
    light2?: string;
}
interface ColorItem {
    [key: string]: Partial<ColorPalette>;
}
export declare const colors: ColorItem;
export declare const palette: {
    text: {
        primary: string;
        secondary: string;
    };
    background: {
        default: string;
    };
    common: CommonColors;
    mode: import("@mui/material").PaletteMode;
    contrastThreshold: number;
    tonalOffset: import("@mui/material/styles/createPalette").PaletteTonalOffset;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: import("@mui/material").Color;
    divider: string;
    action: import("@mui/material/styles").TypeAction;
    getContrastText: (background: string) => string;
    augmentColor: (options: import("@mui/material/styles/createPalette").PaletteAugmentColorOptions) => PaletteColor;
};
export declare const paletteDark: {
    primary: any;
    text: {
        primary: string;
        secondary: string;
    };
    background: {
        default: string;
        paper: string;
    };
    common: CommonColors;
    mode: import("@mui/material").PaletteMode;
    contrastThreshold: number;
    tonalOffset: import("@mui/material/styles/createPalette").PaletteTonalOffset;
    secondary: PaletteColor;
    error: PaletteColor;
    warning: PaletteColor;
    info: PaletteColor;
    success: PaletteColor;
    grey: import("@mui/material").Color;
    divider: string;
    action: import("@mui/material/styles").TypeAction;
    getContrastText: (background: string) => string;
    augmentColor: (options: import("@mui/material/styles/createPalette").PaletteAugmentColorOptions) => PaletteColor;
};
export default palette;
