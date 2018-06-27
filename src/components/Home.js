import React from 'react';
import SCButton from './SCButton';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/primary-logo-large.png';

const styles = theme => ({
  heroBox: {
    height: 300,
    [theme.breakpoints.down('xs')]: {
      // width: '8em !important', // Overrides inline-style
      height: 200
    }
  },
  heroImg: {
    height: 400,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      // width: '8em !important', // Overrides inline-style
      height: 250
    }
  },
  button: {
    marginTop: '3em'
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <div className={classes.heroBox}>
        <img className={classes.heroImg} src={logo} alt="TrackFilter Logo" />
      </div>
      <Typography variant="display1" color="primary">
        Stop scrolling and start listening
      </Typography>
      <div className={classes.button}>
        <SCButton startSession={props.startSession} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
