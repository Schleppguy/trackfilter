import { connect } from 'react-redux';
import { togglePlay, updateVolume } from '../actions';
import Player from '../components/Player';

const mapStateToProps = state => {
  const { track, audio, currentVolume, lastVolume } = state.player;

  return {
    track,
    audio,
    currentVolume,
    lastVolume
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
