import { createTheme, lighten, alpha } from '@mui/material';

const themeColors = {
    primary: '#23A338',   // Verde Oscuro
    secondary: '#2F3367', // Azul Oscuro
    success: '#57CA22',   // Verde éxito
    warning: '#FFA319',   // Naranja advertencia
    error: '#FF1943',     // Rojo error
    info: '#33C2FF',      // Azul información
    black: '#223354',     // Azul-Negro
    white: '#FFFFFF',     // Blanco
    primaryAlt: '#B5C580', // Verde-Azul Claro
    background: '#EFEFEF', // Gris Claro
};

// Definiciones de opacidad
const alphaColors = {
    white: {
        5: alpha(themeColors.white, 0.02),
        10: alpha(themeColors.white, 0.1),
        30: alpha(themeColors.white, 0.3),
        50: alpha(themeColors.white, 0.5),
        70: alpha(themeColors.white, 0.7),
        100: themeColors.white
    },
    black: {
        5: alpha(themeColors.black, 0.02),
        10: alpha(themeColors.black, 0.1),
        30: alpha(themeColors.black, 0.3),
        50: alpha(themeColors.black, 0.5),
        70: alpha(themeColors.black, 0.7),
        100: themeColors.black
    }
};

const theme = createTheme({
    palette: {
        common: {
            black: themeColors.black,
            white: themeColors.white
        },
        primary: {
            main: themeColors.primary,
            contrastText: themeColors.white,
        },
        secondary: {
            main: themeColors.secondary,
            contrastText: themeColors.white,
        },
        error: {
            main: themeColors.error,
        },
        warning: {
            main: themeColors.warning,
        },
        info: {
            main: themeColors.info,
        },
        success: {
            main: themeColors.success,
        },
        background: {
            default: themeColors.background,
            paper: themeColors.white,
        },
        text: {
            primary: themeColors.black,
            secondary: lighten(themeColors.black, 0.5),
        }
    },
    typography: {
        fontFamily:
            '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {
            fontWeight: 700,
            fontSize: 35
        },
        h2: {
            fontWeight: 700,
            fontSize: 30
        },
        h3: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: themeColors.black
        },
        h4: {
            fontWeight: 700,
            fontSize: 16
        },
        h5: {
            fontWeight: 700,
            fontSize: 14
        },
        h6: {
            fontSize: 15
        },
        body1: {
            fontSize: 14
        },
        body2: {
            fontSize: 16
        },
        body3: {
            fontSize: 18
        },
        button: {
            fontWeight: 600
        },
        caption: {
            fontSize: 13,
            textTransform: 'uppercase',
            color: themeColors.black
        },
        subtitle1: {
            fontSize: 14,
            color: themeColors.black
        },
        subtitle2: {
            fontWeight: 400,
            fontSize: 15,
            color: themeColors.black
        },
        overline: {
            fontSize: 13,
            fontWeight: 700,
            textTransform: 'uppercase'
        }
    },
});

export default theme;