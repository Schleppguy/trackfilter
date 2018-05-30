import { handleActions } from 'redux-actions';
import { setTrackNameFilter, setArtistNameFilter } from '../actions';

const defaultState = {
  filters: {
    byTrackName: '',
    byArtistName: ''
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
    })
  },
  defaultState
);

export default client;
