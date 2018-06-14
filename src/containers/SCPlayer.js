import { connect } from 'react-redux';
import { togglePlay, updateVolume } from '../actions';
import Player from '../components/Player';

const mapStateToProps = state => {
  const {
    track,
    loading,
    audio,
    isPlaying,
    currentVolume,
    lastVolume,
    duration,
    isSeeking,
    lastError
  } = state.player;

  return {
    track,
    loading,
    audio,
    isPlaying,
    currentVolume,
    lastVolume,
    duration,
    isSeeking,
    lastError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: bool => dispatch(togglePlay(bool)),
    updateVolume: value => dispatch(updateVolume(value))
  };
};

const SCPlayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);

export default SCPlayer;
