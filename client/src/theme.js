import { createTheme } from '@mui/material/styles';

export const shades = {
  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
  },

  white: {
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333"
  },
};

export const theme = createTheme({

  palette: {
    primary: {
      main: shades.black[500],
    },
    secondary: {
      main: shades.white[500],
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      // fontSize: 60,
      marginLeft: -3,
    },
    h2: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 28,
    },
    h4: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 18,
    },
    h5: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 32,
      fontWeight: "bold",
    },
    h6: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 22,
    },
    h7: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 70,
      fontWeight: "bold",
    },
    h8: {
      fontFamily: ["Noto Sana", "sans-serif"].join(","),
      fontSize: 16,
    }
  },

  components: {
    MuiButton: {
      styleOverrides: {
        containedd: {
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
          maxHeight: "70px",
          minHeight: "70px",
          fontSize: "18px",
          letterSpacing: '4px',
        },
        containedu: {
          borderTopLeftRadius: '0',
          borderTopRightRadius: '0',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
          maxHeight: "70px",
          minHeight: "70px",
          fontSize: "18px",
          letterSpacing: '4px',
        },
        containeda: {
          maxHeight: "60px",
          minHeight: "60px",
          fontSize: "18px",
          letterSpacing: '4px',
        },
        outlined: {
          letterSpacing: '4px',
          borderRadius: '0',
          width: { sm: '80%', md: '500px' },
          height: '50px',
          boxShadow: '0px 7px 8px rgba(0, 0, 0, 0.8)',
        },
        filled: {
          letterSpacing: '4px',
          maxHeight: "60px",
          minHeight: "60px",
          fontSize: "18px",
          letterSpacing: '4px',
          boxShadow: '0px 7px 8px rgba(0, 0, 0, 0.8)',
        },
      },
    },
  },
});