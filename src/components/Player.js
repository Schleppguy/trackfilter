import React, { Component } from 'react';
import playerStyle from '../styles/playerStyle';
import { displayTime } from '../displayUtils';
import Button from 'react-toolbox/lib/button/Button';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Slider from 'react-toolbox/lib/slider/Slider';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    }
    this.play = this.play.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  updateTime() {
    this.setState({ currentTime: this.props.audio.currentTime() / 1000 })
  }

  play() {
    this.props.isPlaying ? this.props.audio.pause() : this.props.audio.play();
    this.props.togglePlay(!this.props.isPlaying)
    this.props.audio.on('time', this.updateTime)
  }

  handleVolumeChange(v) {
    this.props.updateVolume(v)
    this.props.audio.setVolume(v)
  }

  handleTimeChange(v) {
    this.props.audio.seek((this.props.duration * v) * 1000).then(
      this.updateTime()
    )
  }

  render() {
    const { track, loading, duration, isMuted, isPlaying, isSeeking, volume, audio } = this.props;
    const disabled = audio ? false : true;
    return (
      <div style={playerStyle()} >
        <div style={{ width: '10%' }} >
          <Button
            style={{ margin: '1em', marginLeft: '50%' }}
            icon={isPlaying ? "pause" : "play_arrow"}
            floating
            accent
            mini
            onClick={this.play}
            disabled={disabled}
          />
        </div>
        <div style={{ width: '90%', marginLeft: '2em' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '0.5em' }}>
            <div style={{ display: 'flex' }}>
              <img
                src={track ? track.artwork_url ? track.artwork_url : track.user.avatar_url : ''}
                style={{ height: '2.5em', width: '2.5em' }}
                alt={track ? `${track.user.username}: ${track.title}` : ''}
              />
              <p style={{ fontSize: 'small', marginLeft: '1em' }}>
                <strong>{track ? track.user.username : ''}: {track ? track.title : ''}</strong>
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', paddingBottom: '0.5em' }}>
                <div style={{ fontSize: 'small' }}>
                  {displayTime(this.state.currentTime)}
                </div>
                <Slider
                  style={{ width: '50%', marginLeft: '0.5em' }}
                  value={duration ? this.state.currentTime / duration : 0}
                  disabled={disabled}
                  max={1}
                  onChange={v => this.handleTimeChange(v)}
                />
                <div style={{ width: '5%', fontSize: 'small' }}>
                  {displayTime(duration)}
                </div>
                <IconButton
                  style={{ width: '5%', marginLeft: '2em' }}
                  icon={isMuted ? 'volume_off' : 'volume_up'}
                  disabled={disabled}
                  accent
                />
                <Slider
                  style={{ width: '20%' }}
                  value={volume ? volume : 1}
                  max={1}
                  disabled={disabled}
                  onChange={v => this.handleVolumeChange(v)}
                />
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
};

export default Player;
