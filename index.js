import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

// 案１
let primary = '#194840';
let secondary = '#f50057';
// 案２
primary = '#353c5b';
secondary = '#ffcf0c';
// 案３
// primary = '#252c3b';
// secondary = '#FC8D77';
// 案４(JRカラー)
// primary = '#008803';
// secondary = '#252c61';
// 案５(JRカラー)
// primary = '#0072c6';
// secondary = '#f50057';

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          '.Mui-disabled': {
            backgroundColor: 'rgba(0,0,0,0.05)',
          },
        },
      },
    },
  },
  palette: {
    // type: 'light',
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Yu Gothic", sans-serif',
    fontSize: 12,
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
  },
});

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector('#root')
);
