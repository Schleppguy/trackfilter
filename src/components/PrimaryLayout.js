import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import FilterIcon from '@material-ui/icons/FilterList';

import TrackList from '../containers/TrackList';
import SCPlayer from '../containers/SCPlayer';
import ClientFilters from '../containers/ClientFilters';
import primaryLayoutStyles from '../styles/primaryLayoutStyles';
// import logo from '../assets/white-logo-medium.png';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <FilterIcon />
            </IconButton>
            <Typography className={classes.brandText} variant="headline" noWrap>
              TrackFilter
            </Typography>
            {/* <img
              src={logo}
              alt="TrackFilter Logo"
              style={{ height: 80, padding: -40 }}
            /> */}
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <ClientFilters />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <ClientFilters />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <TrackList />
        </main>
        <SCPlayer />
      </div>
    );
  }
}

PrimaryLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(primaryLayoutStyles, { withTheme: true })(
  PrimaryLayout
);
