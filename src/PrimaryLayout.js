import React, { Component } from 'react';
import SC from 'soundcloud';
import _ from 'lodash';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Panel from 'react-toolbox/lib/layout/Panel';
import Layout from 'react-toolbox/lib/layout/Layout';
import Drawer from 'react-toolbox/lib/drawer/Drawer';

import TrackList from './TrackList';
import Filters from './Filters';
import scButton from './assets/btn-connect-sc-l.png';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
});

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      followings: [],
      filteredTracks: []
    }
    this.handleSCClick = this.handleSCClick.bind(this);
    this.updateFilteredTracks = this.updateFilteredTracks.bind(this);
  }

  updateFilteredTracks(tracks) {
    this.setState({ tracks })
  }

  handleSCClick() {
    if (process.env.REACT_APP_ENV === 'development') {
      SC.get('/users/7742327/favorites')
      .then(tracks => {
        this.setState({ tracks, filteredTracks: tracks });
      });

      SC.get('/users/7742327/followings', {limit: 500})
      .then(followings => {
        this.setState({ followings: _.sortBy(followings.collection, ['username']) });
      });
    } else {
      SC.connect().then(() => {      
        return SC.get('/me/activities/tracks/affiliated', {limit: 500, streamable: true});
      }).then(tracks => {
        const collection = tracks.collection.filter(t => t.type === 'track')
        this.setState({tracks: collection, filteredTracks: collection})
      }).then(() => {
        return SC.get('/me/followings', {limit: 500});
      }).then(followings => {
        this.setState({ followings: _.sortBy(followings.collection, ['username']) });
      });
    }
  }
  render() {
    let content;
    if (this.state.tracks.length > 0) {
      content = <TrackList tracks={this.state.filteredTracks} />
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
      <Layout>
        <Panel bodyScroll={ true }>
          <AppBar title="TrackFilter" leftIcon="filter_list" fixed flat/>
          <div style={{ flex: 1, padding: '1.8rem', marginTop: '5em'}}>
            {content}
          </div>
        </Panel>
        <Drawer active={ true } type={ 'right' } withOverlay={ false } insideTree={ true }>
          <div style={{marginTop: '5em'}}>
            <Filters 
              followings={this.state.followings}
              updateFilteredTracks={this.updateFilteredTracks}
              tracks={this.state.tracks}
            />
          </div>
        </Drawer>
      </Layout>
    );
  }
}

export default PrimaryLayout;
