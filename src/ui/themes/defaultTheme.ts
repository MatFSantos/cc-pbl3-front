import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 350,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  palette: {
    primary: {
      light: '#2b5072',
      main: '#073864',
      dark: '#003362',
    },
    secondary: {
      light: '#2bfff2',
      main: '#FC9245',
      dark: '#1dd6cb',
    },
    text: {
      primary: '#404B5A',
      secondary: '#666666',
    },
    error: {
      main: '#FC3C00',
    },
    warning: {
      main: '#FCA600',
    },
    success: {
      main: '#00D34D',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F0F0F0',
      200: '#D7D9DD',
      300: '#C4C4C4',
      400: '#9B9B9B',
      A200: '#EEEEEE',
      A400: '#D5DCE5',
    },
    background: {
      paper: '#86D2D3',
      default: '#CDE3F8',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  shape: {
    borderRadius: '3px',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: 'white',
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

export default defaultTheme;
