import React from 'react';
import playerStyle from '../styles/playerStyle';
import { Timer } from 'react-soundplayer/components';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Slider from 'react-toolbox/lib/slider/Slider';
import { withSoundCloudAudio } from 'react-soundplayer/addons';


const Player = props => {
  const { track, currentTime, duration, isMuted, playing, seeking, volume, soundCloudAudio } = props;

  const play = () => {
    playing ? soundCloudAudio.pause() : soundCloudAudio.play();
  }

  const prettyTime = time => {
    let hours = Math.floor(time / 3600);
    let mins = '0' + Math.floor((time % 3600) / 60);
    let secs = '0' + Math.floor((time % 60));

    mins = mins.substr(mins.length - 2);
    secs = secs.substr(secs.length - 2);

    if (!isNaN(secs)) {
      if (hours) {
        return `${hours}:${mins}:${secs}`;
      }
      return `${mins}:${secs}`;
    }
    return '00:00';
  };

  return (
    <div style={playerStyle()}>
      <div style={{ width: '10%' }} >
        <Button icon={playing ? "pause" : "play_arrow"} floating accent mini onClick={play} style={{ margin: '1em' }} />
      </div>
      <div style={{ width: '60%', paddingBottom: '0.1em', marginLeft: '2em' }}>
        <p style={{ fontSize: 'small' }}><strong>{track ? track.user.username : ''}: {track ? track.title : ''}</strong></p>
        <div style={{ display: 'flex' }}>
          <div style={{ width: '5%', textAlign: 'left', paddingTop: '0.5em', fontSize: 'small' }}>{prettyTime(currentTime)}</div>
          <Slider style={{ width: '90%', marginLeft: '1em' }} value={track ? (currentTime / duration) * 100 : 0} />
          <div style={{ width: '5%', textAlign: 'right', paddingTop: '0.5em', fontSize: 'small' }}>{prettyTime(duration)}</div>
        </div>
      </div>
      <div style={{ width: '20%', marginLeft: '1.5em' }}>
        <div style={{ display: 'flex', marginTop: '2.2em' }}>
          <IconButton icon={isMuted ? 'volume_off' : 'volume_up'} accent />
          <Slider value={volume ? volume : 0} style={{ width: '80%', paddingTop: '0.2em' }} />
        </div>
      </div>
    </div>
  );
};

export default withSoundCloudAudio(Player);
