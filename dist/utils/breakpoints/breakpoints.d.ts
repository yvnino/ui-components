import { Breakpoints } from '@mui/system/createTheme/createBreakpoints';
type BreakpointKeys = 'small' | 'medium' | 'large' | 'extra-large';
type BreakpointsList = {
    [key: string]: number;
};
declare class BreakpointProvider {
    breakpoints: Partial<Breakpoints>;
    mediaQueries: {
        [key: string]: string;
    };
    constructor();
    disableMobileBreakpoints(): void;
}
export declare const appBreakpoints: BreakpointProvider;
export declare const breakpointsList: BreakpointsList;
export declare const screens: (...sizes: BreakpointKeys[]) => string;
export declare const isScreenSize: (size: keyof BreakpointsList, currentSize?: number) => boolean;
export declare const useScreenSize: () => number;
export declare const useBreakpoint: (sizes: BreakpointKeys[] | BreakpointKeys) => boolean;
export declare const useScreens: <T = unknown>() => (valuesByScreen: Partial<Record<BreakpointKeys, T>>, defaultValue?: T | undefined) => T | undefined;
declare const _default: Partial<Breakpoints>;
export default _default;
