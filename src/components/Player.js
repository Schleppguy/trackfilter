import React from 'react';

import TrackTime from '../containers/TrackTime';
import PlayLoad from '../containers/PlayLoad';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VolumeIcon from '@material-ui/icons/VolumeUp';
import MuteIcon from '@material-ui/icons/VolumeOff';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import playerStyles from '../styles/playerStyles';
import { Typography } from '@material-ui/core';

const Player = props => {
  const {
    track,
    currentVolume,
    audio,
    updateVolume,
    lastVolume,
    classes
  } = props;
  const disabled = audio ? false : true;

  const handleVolumeChange = v => {
    updateVolume(v);
    audio.setVolume(v / 100);
  };

  const toggleMute = () => {
    currentVolume > 0 ? handleVolumeChange(0) : handleVolumeChange(lastVolume);
  };

  const trackInfo = track ? (
    <div style={{ display: 'flex' }}>
      <img
        src={track.artwork_url ? track.artwork_url : track.user.avatar_url}
        className={classes.artwork}
        alt={`${track.user.username}: ${track.title}`}
      />
      <div className={classes.info}>
        <Typography variant="body1" color="textSecondary">
          {track.user.username}
        </Typography>
        <Typography variant="body1">{track.title}</Typography>
      </div>
    </div>
  ) : (
    <div className={classes.emptyText}>Player is empty</div>
  );

  return (
    <div className={classes.player}>
      <div className={classes.playLoad}>
        <PlayLoad context="player" disabled={disabled} />
      </div>
      <div className={classes.contentAndControls}>
        <div className={classes.content}>
          {trackInfo}
          <div>
            <div className={classes.controls}>
              <div className={classes.trackTime}>
                <TrackTime disabled={disabled} />
              </div>
              <div className={classes.volume}>
                <IconButton
                  style={{ flexGrow: 1 }}
                  disabled={disabled}
                  color="secondary"
                  onClick={toggleMute}
                >
                  {currentVolume === 0 ? <MuteIcon /> : <VolumeIcon />}
                </IconButton>
                <Slider
                  style={{ marginTop: '1em' }}
                  value={currentVolume}
                  max={100}
                  disabled={disabled}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(playerStyles)(Player);
