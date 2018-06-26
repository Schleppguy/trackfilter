import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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
