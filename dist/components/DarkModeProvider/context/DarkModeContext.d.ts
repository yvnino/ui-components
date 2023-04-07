/// <reference types="react" />
import { PaletteMode } from '@mui/material';
interface Props {
    setDarkMode: (dark: boolean) => void;
    isDark: boolean;
    mode: PaletteMode;
}
declare const DarkModeContext: import("react").Context<Props>;
export declare const useDarkModeContext: () => Props;
export default DarkModeContext;
