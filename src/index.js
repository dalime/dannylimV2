import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from 'material-ui/styles';

import './index.css';
import App from './App';

require('dotenv').config();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#01f77f',
      main: '#00e676',
      dark: '#04bb62',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
  typography: { useNextVariants: true }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));