import { connect } from 'react-redux';
import { loadTrackToPlayer, togglePlay } from '../actions';
import PlayLoadButton from '../components/PlayLoadButton';

const mapStateToProps = state => {
  const { track, audio, isPlaying, currentVolume } = state.player;
  return {
    playerTrack: track,
    audio,
    isPlaying,
    currentVolume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: bool => dispatch(togglePlay(bool)),
    loadTrackToPlayer: (track, volume) =>
      dispatch(loadTrackToPlayer(track, volume))
  };
};

const PlayLoad = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayLoadButton);

export default PlayLoad;
