import React from 'react';

import TrackTime from '../containers/TrackTime';
import PlayLoad from '../containers/PlayLoad';

import IconButton from '@material-ui/core/IconButton';
import VolumeIcon from '@material-ui/icons/VolumeUp';
import MuteIcon from '@material-ui/icons/VolumeOff';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import playerStyle from '../styles/playerStyle';
import { Typography } from '@material-ui/core';

const Player = props => {
  const { track, currentVolume, audio, updateVolume, lastVolume } = props;
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
        style={playerStyle.artwork}
        alt={`${track.user.username}: ${track.title}`}
      />
      <div
        style={{
          fontSize: 'small',
          marginLeft: '1em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}
      >
        <Typography variant="body1" color="textSecondary">
          {track.user.username}
        </Typography>
        <Typography variant="body1">{track.title}</Typography>
      </div>
    </div>
  ) : (
    <div style={{ height: '2em', paddingTop: '0.5em' }}>Player is empty</div>
  );

  return (
    <div style={playerStyle.player}>
      <div style={{ width: '10%' }}>
        <PlayLoad context="player" disabled={disabled} />
      </div>
      <div style={{ width: '90%', marginLeft: '2em' }}>
        <div style={playerStyle.content}>
          {trackInfo}
          <div>
            <div style={playerStyle.controls}>
              <div style={{ flexGrow: 2, marginTop: '1em' }}>
                <TrackTime disabled={disabled} />
              </div>
              <div style={playerStyle.volume}>
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

export default Player;
