import { handleActions } from 'redux-actions';
import {
  setTrackNameFilter,
  setArtistNameFilter,
  setGenreFilter,
  setMultipleArtistsFilter,
  setDurationFilter,
  setOauthToken
} from '../actions';

export const defaultState = {
  filters: {
    byTrackName: '',
    byGenre: '',
    byMultipleArtists: [],
    byDuration: [0, 120]
  },
  oauthToken: null
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
    }),
    [setOauthToken]: (state, { payload }) => ({
      ...state,
      oauthToken: payload
    })
  },
  defaultState
);

export default client;
