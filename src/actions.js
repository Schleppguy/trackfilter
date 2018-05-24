import { createAction } from 'redux-actions';
import SC from 'soundcloud';
import _ from 'lodash';

export const addFun = createAction('ADD_FUN');
export const getTracksFromSC = createAction('GET_TRACKS_FROM_SC');

// async
const DEFAULT_USER_ID = '7742327';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
});

export const getTracks = () => {
  return dispatch => {
    if (process.env.NODE_ENV === 'development') {
      return SC.get(`/users/${DEFAULT_USER_ID}/favorites`).then(tracks => {
        return dispatch(getTracksFromSC(tracks));
      });
    } else {
      return SC.connect()
        .then(session => {
          console.log(session);
          return SC.get('/me/activities/tracks/affiliated', {
            limit: 500,
            streamable: true
          });
        })
        .then(tracks => {
          const collection = tracks.collection.filter(t => t.type === 'track');
          dispatch(getTracksFromSC(collection));
        });
    }
  };
};

export const getFollowings = user => {
  return SC.get(`/users/${user}/followings`, { limit: 500 }).then(followings =>
    _.sortBy(followings.collection, ['username'])
  );
};

export const getMyFollowings = () => {
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
