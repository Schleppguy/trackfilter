import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/react-toolbox/theme.css';
import 'material-design-icons/iconfont/material-icons.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import SC from 'soundcloud';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

import TrackList from './TrackList';
import scButton from './assets/btn-connect-sc-l.png';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
    }
    this.handleSCClick = this.handleSCClick.bind(this);
  }

  handleSCClick() {
    if (process.env.REACT_APP_ENV === 'development') {
      SC.get('/users/7742327/favorites')
      .then(tracks => {
        this.setState({tracks})
      });
    } else {
      SC.connect().then(() => {      
        return SC.get('/me/activities/tracks/affiliated', {limit: 500, streamable: true});
      }).then(tracks => {
        const collection = tracks.collection.filter(t => t.type === 'track')
        this.setState({tracks: collection})
      });
    }
  }
  render() {
    let content;
    if (this.state.tracks.length > 0) {
      content = <TrackList tracks={this.state.tracks} />
    } else {
      content = <button onClick={this.handleSCClick} style={{border: 'none', backgroundColor: 'white'}}>
        <img
          src={scButton}
          className="sc-button"
          alt="Connect with SoundCloud"
        />
      </button>
    }

    return (
      <ThemeProvider theme={theme}>
        {/* <div className="App"> */}
        <div>
          <AppBar title="TrackFilter" leftIcon="menu" />
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to TrackFilter</h1>
          </header> */}
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          {content}
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
