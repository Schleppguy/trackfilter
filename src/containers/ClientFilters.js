import { connect } from 'react-redux';
import { setTrackNameFilter, setArtistNameFilter } from '../actions';
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
    setArtistNameFilter: input => dispatch(setArtistNameFilter(input))
  };
};

const ClientFilters = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default ClientFilters;
