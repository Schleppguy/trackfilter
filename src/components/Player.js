import React from 'react';
import playerStyle from '../styles/playerStyle';
import TrackTime from '../containers/TrackTime';
import PlayLoad from '../containers/PlayLoad';
import IconButton from 'react-toolbox/lib/button/IconButton';
// import Slider from 'react-toolbox/lib/slider/Slider';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
      <p style={{ fontSize: 'small', marginLeft: '1em' }}>
        <strong>
          {track.user.username}: {track.title}
        </strong>
      </p>
    </div>
  ) : (
    <div>Player is empty</div>
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
              <div style={{ width: '70%' }}>
                <TrackTime disabled={disabled} />
              </div>
              <div style={playerStyle.volume}>
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
