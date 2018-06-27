import React from 'react';
import SCButton from './SCButton';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/white-logo-transparent-large.png';
import homeStyles from '../styles/homeStyles';

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

export default withStyles(homeStyles)(Home);
