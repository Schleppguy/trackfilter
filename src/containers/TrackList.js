import { connect } from 'react-redux';
import { getNewTracks, startSession } from '../actions';
import TrackListView from '../components/TrackListView';

const mapStateToProps = state => {
  return { trackList: state.tracks.trackList };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewTracks: () => dispatch(getNewTracks()),
    startSession: () => dispatch(startSession())
  };
};

const TrackList = connect(mapStateToProps, mapDispatchToProps)(TrackListView);

export default TrackList;
