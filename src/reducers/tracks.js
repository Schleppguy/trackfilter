import { handleActions } from 'redux-actions';
import { appendNewTracks } from '../actions';

const defaultState = {
  trackList: []
};

const tracks = handleActions(
  {
    [appendNewTracks]: (state, { payload }) => ({
      ...state,
      trackList: state.trackList.concat(payload)
    })
  },
  defaultState
);

export default tracks;
