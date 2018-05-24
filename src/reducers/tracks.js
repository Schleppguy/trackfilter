import { handleActions } from 'redux-actions';
import { getTracksFromSC } from '../actions';

const defaultState = {
  trackList: []
};

const tracks = handleActions(
  {
    [getTracksFromSC]: (state, { payload }) => ({
      ...state,
      trackList: state.trackList.concat(payload)
    })
  },
  defaultState
);

export default tracks;
