import React from 'react';
import playerStyle from '../styles/playerStyle';
import TrackTime from '../containers/TrackTime';
import PlayLoad from '../containers/PlayLoad';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Slider from 'react-toolbox/lib/slider/Slider';

const Player = props => {
  const { track, currentVolume, audio, updateVolume, lastVolume } = props;
  const disabled = audio ? false : true;

  const handleVolumeChange = v => {
    updateVolume(v);
    audio.setVolume(v);
  };

  const toggleMute = () => {
    currentVolume > 0 ? handleVolumeChange(0) : handleVolumeChange(lastVolume);
  };

  return (
    <div style={playerStyle.player}>
      <div style={{ width: '10%' }}>
        <PlayLoad context="player" disabled={disabled} />
      </div>
      <div style={{ width: '90%', marginLeft: '2em' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0.5em'
          }}
        >
          {track ? (
            <div style={{ display: 'flex' }}>
              <img
                src={
                  track.artwork_url ? track.artwork_url : track.user.avatar_url
                }
                style={playerStyle.artwork}
                alt={`${track.user.username}: ${track.title}`}
              />
              <p style={{ fontSize: 'small', marginLeft: '1em' }}>
                <strong>
                  {track.user.username}: {track.title}
                </strong>
              </p>
            </div>
          ) : (
            <div>Player is empty</div>
          )}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                paddingBottom: '0.5em'
              }}
            >
              <div style={{ width: '70%' }}>
                <TrackTime disabled={disabled} />
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '25%',
                  alignItems: 'baseline'
                }}
              >
                <IconButton
                  style={{ width: '10%' }}
                  icon={currentVolume === 0 ? 'volume_off' : 'volume_up'}
                  disabled={disabled}
                  accent
                  onClick={toggleMute}
                />
                <Slider
                  style={{ width: '80%' }}
                  value={currentVolume}
                  max={1}
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
