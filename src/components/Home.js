import React from 'react';
import SCButton from './SCButton';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/white-logo-transparent-large.png';

const styles = theme => ({
  heroBox: {
    height: '12em',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      // width: '8em !important', // Overrides inline-style
      height: '8em'
    },
    backgroundColor: theme.palette.primary.main
  },
  heroImg: {
    width: 400,
    marginTop: '3em',
    overflow: 'hidden',
    opacity: 1,
    [theme.breakpoints.down('xs')]: {
      // width: '8em !important', // Overrides inline-style
      width: 250,
      marginTop: '2em'
    }
  },
  button: {
    marginTop: '2em'
  },
  headline: {
    color: theme.palette.primary.dark,
    margin: '1em'
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
        textAlign: 'center',
        backgroundColor: 'white',
        minHeight: 800
      }}
    >
      <div className={classes.heroBox}>
        <img className={classes.heroImg} src={logo} alt="TrackFilter Logo" />
      </div>
      <Typography className={classes.headline} variant="display1">
        Stop scrolling and start listening
      </Typography>
      <div className={classes.button}>
        <SCButton startSession={props.startSession} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
