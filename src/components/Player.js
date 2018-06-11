import React from 'react';
import playerStyle from '../styles/playerStyle';
import { displayTime } from '../displayUtils';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Slider from 'react-toolbox/lib/slider/Slider';
import { withSoundCloudAudio } from 'react-soundplayer/addons';


const Player = props => {
  const { track, currentTime, duration, isMuted, playing, seeking, volume, soundCloudAudio } = props;

  const play = () => {
    playing ? soundCloudAudio.pause() : soundCloudAudio.play();
  }

  return (
    <div style={playerStyle()}>
      <div style={{ width: '10%' }} >
        <Button style={{ margin: '1em', marginLeft: '50%' }} icon={playing ? "pause" : "play_arrow"} floating accent mini onClick={play} />
      </div>
      <div style={{ width: '90%', marginLeft: '2em' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.5em' }}>
          <div style={{ display: 'flex' }}>
            <img
              src={track ? track.artwork_url ? track.artwork_url : track.user.avatar_url : ''}
              style={{ height: '2.5em', width: '2.5em' }}
              alt={track ? `${track.user.username}: ${track.title}` : ''}
            />
            <p style={{ fontSize: 'small', marginLeft: '1em' }}><strong>{track ? track.user.username : ''}: {track ? track.title : ''}</strong></p>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', paddingBottom: '0.5em' }}>
              <div style={{ fontSize: 'small' }}>{displayTime(currentTime)}</div>
              <Slider style={{ width: '50%', marginLeft: '0.5em' }} value={track ? (currentTime / duration) * 100 : 0} />
              <div style={{ width: '5%', fontSize: 'small' }}>{displayTime(duration)}</div>
              <IconButton style={{ width: '5%', marginLeft: '2em' }} icon={isMuted ? 'volume_off' : 'volume_up'} accent />
              <Slider style={{ width: '20%' }} value={volume ? volume : 0} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default withSoundCloudAudio(Player);
