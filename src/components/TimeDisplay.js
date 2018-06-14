import React, { PureComponent } from 'react';
import { displayTime } from '../displayUtils';
import Slider from 'react-toolbox/lib/slider/Slider';
import ProgressBar from 'react-toolbox/lib/progress_bar/ProgressBar';

class TimeDisplay extends PureComponent {
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
    this.props.audio.seek(this.props.duration * t * 1000);
  }

  render() {
    const { disabled, duration, loading } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ fontSize: 'small' }}>
          {displayTime(this.state.currentTime)}
        </div>
        {loading ? (
          <ProgressBar style={{ width: '90%' }} mode="indeterminate" />
        ) : (
          <Slider
            style={{ width: '90%' }}
            value={duration ? this.state.currentTime / duration : 0}
            disabled={disabled}
            max={1}
            onChange={this.handleTimeChange}
          />
        )}
        <div style={{ fontSize: 'small' }}>{displayTime(duration)}</div>
      </div>
    );
  }
}

export default TimeDisplay;
