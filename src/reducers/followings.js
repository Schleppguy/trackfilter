import { handleActions } from 'redux-actions';
import {
  appendNewFollowings,
  newFollowingsAppended,
  newFollowingsAppendFailed
} from '../actions';
import _ from 'lodash';

const defaultState = {
  loading: false,
  followingsList: [],
  cursor: null,
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
      followingsList: _.sortBy(
        state.followingsList.concat(payload.collection),
        [o => o.username.toLowerCase()]
      ),
      cursor: payload.cursor,
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
