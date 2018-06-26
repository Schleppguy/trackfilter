import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: '6em',
    width: '6em'
  },
  image: {
    position: 'relative',
    height: '8em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      width: '8em !important', // Overrides inline-style
      height: '8em'
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      },
      '& $imageIcon': {
        border: '1px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    height: '8em',
    width: '8em'
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
    height: '8em',
    width: '8em'
  },
  imageIcon: {
    position: 'relative'
  }
});

const formatArtwork = url => {
  const temp = url.split('-');
  return temp.slice(0, temp.length - 1).join('-') + '-t500x500.jpg';
};

const MediaButton = props => {
  const { track, iconVal, play, classes } = props;
  const artwork = track.artwork_url ? track.artwork_url : track.user.avatar_url;

  return (
    <div className={classes.root}>
      <ButtonBase
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        onClick={() => play()}
      >
        <span className={classes.imageSrc}>
          <img
            style={{ height: '8em', width: '8em' }}
            src={formatArtwork(artwork)}
            alt={`${track.user.username}: ${track.title}`}
          />
        </span>
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          {iconVal === 'play' ? (
            <PlayIcon className={classes.imageIcon} />
          ) : (
            <PauseIcon className={classes.imageIcon} />
          )}
        </span>
      </ButtonBase>
    </div>
  );
};

MediaButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaButton);
