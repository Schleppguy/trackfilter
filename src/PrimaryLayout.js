import React, { Component } from 'react';
import { getTracks, getFollowings } from './scFetch';
import _ from 'lodash';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Panel from 'react-toolbox/lib/layout/Panel';
import Layout from 'react-toolbox/lib/layout/Layout';
import Drawer from 'react-toolbox/lib/drawer/Drawer';

import TrackList from './TrackList';
import Filters from './Filters';
import scButton from './assets/btn-connect-sc-l.png';

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
      getTracks()
      .then(tracks => {
        this.setState({ tracks, filteredTracks: tracks });
      })
      .catch(err => console.error(err));

      getFollowings('7742327')
      .then(followings => {
        this.setState({ followings: _.sortBy(followings.collection, ['username']) });
      })
      .catch(err => console.error(err));
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
