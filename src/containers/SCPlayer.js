import { connect } from 'react-redux';
import { loadTrackToPlayer, togglePlay, updateVolume } from '../actions';
import Player from '../components/Player';



const mapStateToProps = state => {
  const {
    track,
    loading,
    audio,
    isPlaying,
    isMuted,
    volume,
    duration,
    isSeeking,
    lastError
  } = state.player;
  return {
    track,
    loading,
    audio,
    isPlaying,
    isMuted,
    volume,
    duration,
    isSeeking,
    lastError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTrackToPlayer: track => dispatch(loadTrackToPlayer(track)),
    togglePlay: bool => dispatch(togglePlay(bool)),
    updateVolume: value => dispatch(updateVolume(value))
  };
};

const SCPlayer = connect(mapStateToProps, mapDispatchToProps)(
  Player
);

export default SCPlayer;
