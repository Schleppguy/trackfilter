import { handleActions } from 'redux-actions';
import {
  setTrackNameFilter,
  setArtistNameFilter,
  setGenreFilter,
  setMultipleArtistsFilter,
  setDurationFilter
} from '../actions';

const defaultState = {
  filters: {
    byTrackName: '',
    byArtistName: '',
    byGenre: '',
    byMultipleArtists: [],
    byDuration: [0, 120]
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
    }),
    [setDurationFilter]: (state, { payload }) => ({
      ...state,
      filters: { ...state.filters, byDuration: payload }
    })
  },
  defaultState
);

export default client;
