import React from 'react';
import Button from 'react-toolbox/lib/button/Button';

const PlayLoadButton = props => {
  const { isPlaying, audio, disabled, context, togglePlay, track, playerTrack, currentVolume, loadTrackToPlayer } = props;

  const play = () => {
    if (context === 'player') {
      isPlaying ? audio.pause() : audio.play();
      togglePlay(!isPlaying)
    } else {
      if (audio && playerTrack.id !== track.id) {
        audio.kill()
        togglePlay(!isPlaying)
        loadTrackToPlayer(track, currentVolume)
      } else if (audio && playerTrack.id === track.id) {
        isPlaying ? audio.pause() : audio.play()
        togglePlay(!isPlaying)
      } else {
        loadTrackToPlayer(track, currentVolume)
      }
    }
  }

  if (context === 'player') {
    return (
      <Button
        style={{ margin: '1em', marginLeft: '50%' }}
        icon={isPlaying ? "pause" : "play_arrow"}
        floating
        accent
        mini={context === 'player'}
        onClick={play}
        disabled={disabled}
      />
    )
  } else {
    let iconVal;
    if (isPlaying && playerTrack && playerTrack.id === track.id) {
      iconVal = 'pause'
    } else {
      iconVal = 'play_arrow'
    }
    return (
      <Button
        style={{ marginLeft: '1em' }}
        icon={iconVal}
        floating
        accent
        mini
        onClick={play}
      />
    )
  }
};

export default PlayLoadButton;
