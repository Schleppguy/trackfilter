import { handleActions } from 'redux-actions';
import {
  setTrackNameFilter,
  setArtistNameFilter,
  setGenreFilter,
  setMultipleArtistsFilter
} from '../actions';

const defaultState = {
  filters: {
    byTrackName: '',
    byArtistName: '',
    byGenre: '',
    byMultipleArtists: []
  }
};

const client = handleActions(
  {
    [setTrackNameFilter]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, byTrackName: payload }
    }),
    [setArtistNameFilter]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, byArtistName: payload }
    }),
    [setGenreFilter]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, byGenre: payload }
    }),
    [setMultipleArtistsFilter]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, byMultipleArtists: payload }
    })
  },
  defaultState
);

export default client;
