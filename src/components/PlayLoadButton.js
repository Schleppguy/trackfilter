import React from 'react';

import MediaButton from './MediaButton';
import Button from '@material-ui/core/Button';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const PlayLoadButton = props => {
  const {
    isPlaying,
    audio,
    disabled,
    context,
    togglePlay,
    track,
    playerTrack,
    currentVolume,
    loadTrackToPlayer
  } = props;

  const play = () => {
    if (context === 'player') {
      isPlaying ? audio.pause() : audio.play();
      togglePlay(!isPlaying);
    } else {
      if (audio && playerTrack.id !== track.id) {
        audio.kill();
        togglePlay(!isPlaying);
        loadTrackToPlayer(track, currentVolume);
      } else if (audio && playerTrack.id === track.id) {
        isPlaying ? audio.pause() : audio.play();
        togglePlay(!isPlaying);
      } else {
        loadTrackToPlayer(track, currentVolume);
      }
    }
  };

  if (context === 'player') {
    return (
      <Button
        style={{ margin: '1em 1em 1em 50%' }}
        variant="fab"
        aria-label={isPlaying ? 'pause' : 'play'}
        onClick={play}
        disabled={disabled}
        mini
        color="secondary"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
    );
  } else {
    let iconVal;
    if (isPlaying && playerTrack && playerTrack.id === track.id) {
      iconVal = 'pause';
    } else {
      iconVal = 'play';
    }
    return (
      <MediaButton track={track} iconVal={iconVal} play={play.bind(this)} />
    );
  }
};

export default PlayLoadButton;
