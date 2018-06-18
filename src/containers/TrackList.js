import { connect } from 'react-redux';
import { startSession } from '../actions';
import ViewableTrackList from '../components/ViewableTrackList';
import _ from 'lodash';

export const isIncluded = (fullString, subString) => {
  return fullString === null
    ? false
    : fullString.toLowerCase().includes(subString.trimLeft().toLowerCase());
};

export const filterByTrackName = (track, filters) => {
  return filters.byTrackName === ''
    ? true
    : isIncluded(track.title, filters.byTrackName);
};

export const filterByArtistName = (track, filters) => {
  return filters.byArtistName === ''
    ? true
    : isIncluded(track.user.username, filters.byArtistName);
};

export const filterByGenre = (track, filters) => {
  return filters.byGenre === ''
    ? true
    : isIncluded(track.genre, filters.byGenre);
};

const FILTER_LIST = [filterByTrackName, filterByArtistName, filterByGenre];

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
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startSession: () => dispatch(startSession())
  };
};

const TrackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewableTrackList);

export default TrackList;
