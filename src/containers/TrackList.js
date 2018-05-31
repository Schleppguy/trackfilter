import { connect } from 'react-redux';
import { getNewTracks, startSession } from '../actions';
import ViewableTrackList from '../components/ViewableTrackList';
import _ from 'lodash';

const filterByTrackName = (track, filters) => {
  return filters.byTrackName === ''
    ? true
    : track.title
        .toLowerCase()
        .includes(filters.byTrackName.trimLeft().toLowerCase());
};

const filterByArtistName = (track, filters) => {
  return filters.byArtistName === ''
    ? true
    : track.user.username
        .toLowerCase()
        .includes(filters.byArtistName.trimLeft().toLowerCase());
};

const FILTER_LIST = [filterByTrackName, filterByArtistName];

const filterTrackList = (trackList, filters) => {
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
    startSession: () => dispatch(startSession())
  };
};

const TrackList = connect(mapStateToProps, mapDispatchToProps)(
  ViewableTrackList
);

export default TrackList;
