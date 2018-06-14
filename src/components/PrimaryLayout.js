import React, { Component } from 'react';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Panel from 'react-toolbox/lib/layout/Panel';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';

import TrackList from '../containers/TrackList';
import SCPlayer from '../containers/SCPlayer';
import ClientFilters from '../containers/ClientFilters';
// import FunButton from '../containers/FunButton';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false,
      drawerPinned: window.innerWidth > 900
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
  }

  handleResize() {
    this.setState({ drawerPinned: window.innerWidth > 900 });
  }

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive });
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    return (
      <div>
        <Layout>
          <NavDrawer
            active={this.state.drawerActive}
            pinned={this.state.drawerPinned}
            onOverlayClick={this.toggleDrawerActive}
            width="wide"
          >
            <ClientFilters />
          </NavDrawer>
          <Panel bodyScroll={true}>
            <AppBar
              leftIcon={this.state.drawerPinned ? '' : 'filter_list'}
              onLeftIconClick={this.toggleDrawerActive}
              fixed
              flat
            >
              <div
                style={{
                  fontSize: '1.5em',
                  marginLeft: this.state.drawerPinned ? '50%' : '25%'
                }}
              >
                <strong>TrackFilter</strong>
              </div>
            </AppBar>
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
            <SCPlayer />
          </Panel>
        </Layout>
      </div>
    );
  }
}

export default PrimaryLayout;
