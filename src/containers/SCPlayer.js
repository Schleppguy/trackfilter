import { connect } from 'react-redux';
import { togglePlay, updateVolume } from '../actions';
import Player from '../components/Player';

const mapStateToProps = state => {
  const {
    track,
    audio,
    isPlaying,
    currentVolume,
    lastVolume,
    lastError
  } = state.player;

  return {
    track,
    audio,
    isPlaying,
    currentVolume,
    lastVolume,
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
