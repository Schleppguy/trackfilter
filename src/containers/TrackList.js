import { connect } from 'react-redux';
import { getNewTracks } from '../actions';
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

export const filterByGenre = (track, filters) => {
  return filters.byGenre === ''
    ? true
    : isIncluded(track.genre, filters.byGenre);
};

export const filterByMultipleArtists = (track, filters) => {
  return filters.byMultipleArtists.length === 0
    ? true
    : filters.byMultipleArtists.lastIndexOf(track.user.username) >= 0;
};

export const filterByDuration = (track, filters) => {
  const duration = track.duration / 1000 / 60;
  return duration > filters.byDuration[0] && duration < filters.byDuration[1];
};

const FILTER_LIST = [
  filterByTrackName,
  // filterByArtistName,
  filterByGenre,
  filterByMultipleArtists,
  filterByDuration
];

export const filterTrackList = (trackList, filters) => {
  return _.filter(trackList, track =>
    _.every(_.map(FILTER_LIST, f => f(track, filters)))
  );
};

const mapStateToProps = state => {
  const { trackList, cursor, loading } = state.tracks;
  const { filters } = state.client;
  return {
    viewableTrackList: filterTrackList(trackList, filters),
    trackList,
    cursor,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewTracks: cursor => dispatch(getNewTracks(cursor))
  };
};

const TrackList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewableTrackList);

export default TrackList;
