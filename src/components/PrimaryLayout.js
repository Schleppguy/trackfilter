import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Panel from 'react-toolbox/lib/layout/Panel';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

import SCButton from '../containers/SCButton';
import TrackList from '../containers/TrackList';
import Filters from '../Filters';
import Player from '../containers/Player';

class PrimaryLayout extends Component {
  state = {
    drawerActive: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  render() {
    return (
      <div>
        <Layout>
          <NavDrawer
            active={this.state.drawerActive}
            onOverlayClick={this.toggleDrawerActive}
            width="wide"
            permanentAt="md"
          >
            <div style={{ flex: 1, padding: '1.8rem', marginTop: '2em' }}>
              <h3>Filters</h3>
            </div>
          </NavDrawer>
          <Panel bodyScroll={true}>
            <AppBar
              title="TrackFilter"
              leftIcon="filter_list"
              onLeftIconClick={this.toggleDrawerActive}
              fixed
              flat
            />
            <div style={{ flex: 1, padding: '1.8rem', marginTop: '5em' }}>
              <SCButton />
              <TrackList />
            </div>
            <Player className="player" />
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default PrimaryLayout;
