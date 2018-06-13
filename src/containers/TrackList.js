import { connect } from 'react-redux';
import { getNewTracks, startSession } from '../actions';
import ViewableTrackList from '../components/ViewableTrackList';
import _ from 'lodash';

export const isIncluded = (fullString, subString) => {
  return fullString.toLowerCase().includes(subString.trimLeft().toLowerCase());
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

const FILTER_LIST = [filterByTrackName, filterByArtistName];

export const filterTrackList = (trackList, filters) => {
  return _.filter(trackList, track =>
    _.every(_.map(FILTER_LIST, f => f(track, filters)))
  );
};

const mapStateToProps = state => {
  const { trackList, loading } = state.tracks;
  const { filters } = state.client;
  const { currentVolume } = state.player;
  return {
    trackList: filterTrackList(trackList, filters),
    loading,
    filters,
    currentVolume
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
