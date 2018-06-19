import { handleActions } from 'redux-actions';
import {
  appendNewFollowings,
  newFollowingsAppended,
  newFollowingsAppendFailed
} from '../actions';

const defaultState = {
  loading: false,
  followingsList: [],
  lastError: null
};

const followings = handleActions(
  {
    [appendNewFollowings]: (state, { payload }) => ({
      ...state,
      loading: true
    }),
    [newFollowingsAppended]: (state, { payload }) => ({
      ...state,
      followingsList: state.followingsList.concat(payload),
      loading: false
    }),
    [newFollowingsAppendFailed]: (state, { payload }) => ({
      ...state,
      lastError: payload,
      loading: false
    })
  },
  defaultState
);

export default followings;
