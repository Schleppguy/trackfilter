import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PrimaryLayout from './PrimaryLayout';
import Home from './Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#546e7a',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#ffa06d',
      main: '#ff6e40',
      contrastText: '#ffffff'
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          {this.props.oauthToken === null ? (
            <Home startSession={this.props.startSession} />
          ) : (
            <PrimaryLayout />
          )}
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
