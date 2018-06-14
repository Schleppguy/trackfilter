import { connect } from 'react-redux';
import TimeDisplay from '../components/TimeDisplay';

const mapStateToProps = state => {
  const { audio, duration, loading } = state.player;
  return {
    audio,
    duration,
    loading
  };
};

const TrackTime = connect(mapStateToProps)(TimeDisplay);

export default TrackTime;
