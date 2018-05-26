import { connect } from 'react-redux';
import { getNewTracks, startSession } from '../actions';
import TrackListView from '../components/TrackListView';

const mapStateToProps = state => {
  const { trackList, loading, lastError } = state.tracks;
  return {
    trackList: trackList,
    loading: loading,
    lastError: lastError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewTracks: () => dispatch(getNewTracks()),
    startSession: () => dispatch(startSession())
  };
};

const TrackList = connect(mapStateToProps, mapDispatchToProps)(TrackListView);

export default TrackList;
