import { connect } from 'react-redux';
import { getNewTracks, startSession, loadTrackToPlayer } from '../actions';
import player from '../components/player';
import _ from 'lodash';

export const filterTrackList = (trackList, filters) => {
  return _.filter(trackList, track =>
    _.every(_.map(FILTER_LIST, f => f(track, filters)))
  );
};

const mapStateToProps = state => {
  const { trackList, loading } = state.tracks;
  const { filters } = state.client;
  return {
    trackList: filterTrackList(trackList, filters),
    loading,
    filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewTracks: () => dispatch(getNewTracks()),
    startSession: () => dispatch(startSession()),
    loadTrackToPlayer: track => dispatch(loadTrackToPlayer(track))
  };
};

const Player = connect(mapStateToProps, mapDispatchToProps)(
  ViewableTrackList
);

export default Player;
