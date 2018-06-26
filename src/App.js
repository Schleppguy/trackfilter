import React, { Component } from 'react';
// import './assets/react-toolbox/theme.css';
// import 'material-design-icons/iconfont/material-icons.css';
import CssBaseline from '@material-ui/core/CssBaseline';
// import theme from './assets/react-toolbox/theme.js';
// import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import PrimaryLayout from './components/PrimaryLayout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <PrimaryLayout />
      </React.Fragment>
    );
  }
}

export default App;
