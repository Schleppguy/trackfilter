import { handleActions } from 'redux-actions';
import {
  appendNewTracks,
  newTracksAppended,
  newTracksAppendFailed
} from '../actions';

const defaultState = {
  loading: false,
  trackList: [],
  lastError: null
};

const tracks = handleActions(
  {
    [appendNewTracks]: (state, { payload }) => ({
      ...state,
      loading: true
    }),
    [newTracksAppended]: (state, { payload }) => ({
      ...state,
      trackList: state.trackList.concat(payload),
      loading: false
    }),
    [newTracksAppendFailed]: (state, { payload }) => ({
      ...state,
      lastError: payload,
      loading: false
    })
  },
  defaultState
);

export default tracks;
