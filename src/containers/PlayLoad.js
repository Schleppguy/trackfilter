import { connect } from 'react-redux';
import { loadTrackToPlayer, togglePlay } from '../actions';
import PlayLoadButton from '../components/PlayLoadButton';


const mapStateToProps = state => {
  const { loading, track, audio, isPlaying, currentVolume, lastVolume } = state.player;
  return {
    loading,
    playerTrack: track,
    audio,
    isPlaying,
    currentVolume,
    lastVolume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    togglePlay: bool => dispatch(togglePlay(bool)),
    loadTrackToPlayer: (track, volume) => dispatch(loadTrackToPlayer(track, volume))
  };
};

const PlayLoad = connect(mapStateToProps, mapDispatchToProps)(
  PlayLoadButton
);

export default PlayLoad;
