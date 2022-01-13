import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#0e0e00',
    // },
    // secondary: {
    //   main: '#b8a222',
    // },
  },
  typography: {
    fontFamily: 'Assistant, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    cardTitle: {
      fontFamily: 'Assistant, sans-serif',
      fontWeight: '400',
      color: '#1976D2',
      fontSize: 14,
    },
    cardBody: {
      fontFamily: 'Assistant, sans-serif',
      fontSize: 13,
      fontWeight: '600',
      color: 'rgba(0,0,0,0.5)',
    },
  },
});
