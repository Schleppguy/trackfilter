import { connect } from 'react-redux';
import {
  setTrackNameFilter,
  setArtistNameFilter,
  setGenreFilter,
  setMultipleArtistsFilter,
  setDurationFilter,
  getMyFollowings
} from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => {
  const { filters } = state.client;
  const { followingsList, cursor } = state.followings;
  return {
    filters,
    followingsList,
    cursor
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTrackNameFilter: input => dispatch(setTrackNameFilter(input)),
    setArtistNameFilter: input => dispatch(setArtistNameFilter(input)),
    setGenreFilter: input => dispatch(setGenreFilter(input)),
    setMultipleArtistsFilter: array =>
      dispatch(setMultipleArtistsFilter(array)),
    setDurationFilter: array => dispatch(setDurationFilter(array)),
    getMyFollowings: cursor => dispatch(getMyFollowings(cursor))
  };
};

const ClientFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default ClientFilters;
