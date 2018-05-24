import { handleActions } from 'redux-actions';
import { getTracksFromSC } from '../actions';
import SC from 'soundcloud';
import _ from 'lodash';

const defaultState = {
  trackList: []
};

const DEFAULT_USER_ID = '7742327';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
});

const dispatchTracks = (state, { payload }) => {
  return {
    ...state,
    trackList: state.trackList.concat(payload)
  };
};
const getTracks = () => {
  return dispatch => {
    if (process.env.NODE_ENV === 'development') {
      dispatch(dispatchTracks(SC.get(`/users/${DEFAULT_USER_ID}/favorites`)));
    } else {
      SC.connect()
        .then(session => {
          console.log(session);
          return SC.get('/me/activities/tracks/affiliated', {
            limit: 500,
            streamable: true
          });
        })
        .then(tracks => {
          const collection = tracks.collection.filter(t => t.type === 'track');
          dispatch(dispatchTracks(collection));
        });
    }
  };
};

const getFollowings = user => {
  return SC.get(`/users/${user}/followings`, { limit: 500 }).then(followings =>
    _.sortBy(followings.collection, ['username'])
  );
};

const getMyFollowings = () => {
  if (process.env.NODE_ENV === 'development') {
    return getFollowings(DEFAULT_USER_ID);
  } else {
    return SC.connect()
      .then(() => {
        return SC.get('/me/followings', { limit: 500 });
      })
      .then(followings => _.sortBy(followings.collection, ['username']));
  }
};

const tracks = handleActions(
  {
    [getTracksFromSC]: getTracks
  },
  defaultState
);

export default tracks;
