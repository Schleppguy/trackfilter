import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PrimaryLayout from './components/PrimaryLayout';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#b0bec5',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#ffa06d',
      main: '#ff6e40',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fafafa'
    }
    // error: will use the default color
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <PrimaryLayout />
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
