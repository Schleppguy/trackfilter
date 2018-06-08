import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Panel from 'react-toolbox/lib/layout/Panel';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

import TrackList from '../containers/TrackList';
import Player from './Player';
import ClientFilters from '../containers/ClientFilters';
// import FunButton from '../containers/FunButton';

class PrimaryLayout extends Component {
  state = {
    drawerActive: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  render() {
    console.log(process.env.REACT_APP_SC_CLIENT_ID)
    return (
      <div>
        <Layout>
          <NavDrawer
            active={this.state.drawerActive}
            onOverlayClick={this.toggleDrawerActive}
            width="wide"
            permanentAt="md"
          >
            <ClientFilters />
          </NavDrawer>
          <Panel bodyScroll={true}>
            <AppBar
              title="TrackFilter"
              leftIcon="filter_list"
              onLeftIconClick={this.toggleDrawerActive}
              fixed
              flat
            />
            <div
              style={{
                flex: 1,
                padding: '1.8rem',
                marginTop: '5em',
                paddingBottom: '6em'
              }}
            >
              <TrackList />
            </div>
            <Player
              clientId={process.env.REACT_APP_SC_CLIENT_ID}
              resolveUrl={'https://soundcloud.com/loquai/unison-030-hby-loquai-at-frisky-radio-12042018'}
            />
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default PrimaryLayout;
