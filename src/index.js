import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
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