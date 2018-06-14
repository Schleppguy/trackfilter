import { connect } from 'react-redux';
import {
  setTrackNameFilter,
  setArtistNameFilter,
  setGenreFilter
} from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => {
  const { filters } = state.client;
  return {
    filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTrackNameFilter: input => dispatch(setTrackNameFilter(input)),
    setArtistNameFilter: input => dispatch(setArtistNameFilter(input)),
    setGenreFilter: input => dispatch(setGenreFilter(input))
  };
};

const ClientFilters = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default ClientFilters;
