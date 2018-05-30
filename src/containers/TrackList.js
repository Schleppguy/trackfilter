import { connect } from 'react-redux';
import { getNewTracks, startSession } from '../actions';
import ViewableTrackList from '../components/ViewableTrackList';
import _ from 'lodash';

const filterByTrackName = (trackList, filters) => {
  return filters.byTrackName === ''
    ? trackList
    : _.filter(trackList, o => {
        return o.title
          .toLowerCase()
          .includes(filters.byTrackName.trimLeft().toLowerCase());
      });
};

const filterByArtistName = (trackList, filters) => {
  return filters.byArtistName === ''
    ? trackList
    : _.filter(trackList, o => {
        return o.user.username
          .toLowerCase()
          .includes(filters.byArtistName.trimLeft().toLowerCase());
      });
};

const FILTER_LIST = [filterByTrackName, filterByArtistName];

const filterTrackList = (trackList, filters) => {
  return _.intersection(..._.map(FILTER_LIST, f => f(trackList, filters)));
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
