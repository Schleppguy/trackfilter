import React, { Component } from 'react';
import { displayTime } from '../displayUtils';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class TimeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0
    };
    this.updateTime = this.updateTime.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.audio !== prevProps.audio) {
      this.props.audio.on('time', this.updateTime);
    }
  }

  updateTime() {
    this.setState({ currentTime: this.props.audio.currentTime() / 1000 });
  }

  handleTimeChange(t) {
    this.props.audio.seek(t);
  }

  render() {
    const { disabled, duration, loading } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ fontSize: 'small' }}>
          {displayTime(this.state.currentTime)}
        </div>
        <Slider
          style={{ width: '85%', marginLeft: '1em' }}
          value={this.state.currentTime * 1000}
          disabled={disabled}
          max={duration ? duration * 1000 : 1}
          onChange={this.handleTimeChange}
        />
        <div style={{ fontSize: 'small', marginLeft: '1em' }}>
          {displayTime(duration)}
        </div>
      </div>
    );
  }
}

export default TimeDisplay;
