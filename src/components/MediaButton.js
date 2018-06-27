import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import mediaButtonStyles from '../styles/mediaButtonStyles';

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

export default withStyles(mediaButtonStyles)(MediaButton);
