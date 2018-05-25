import SC from 'soundcloud';
import _ from 'lodash';

const DEFAULT_USER_ID = '7742327';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
});

export const scGetTracks = () => {
  if (process.env.NODE_ENV === 'development') {
    return SC.get(`/users/${DEFAULT_USER_ID}/favorites`);
  } else {
    return SC.connect()
      .then(() => {
        return SC.get('/me/activities/tracks/affiliated', {
          limit: 500,
          streamable: true
        });
      })
      .then(tracks => {
        const collection = tracks.collection.filter(t => t.type === 'track');
        return collection;
      });
  }
};

export const scGetFollowings = user => {
  return SC.get(`/users/${user}/followings`, { limit: 500 }).then(followings =>
    _.sortBy(followings.collection, ['username'])
  );
};

export const scGetMyFollowings = () => {
  if (process.env.NODE_ENV === 'development') {
    return scGetFollowings(DEFAULT_USER_ID);
  } else {
    return SC.connect()
      .then(() => {
        return SC.get('/me/followings', { limit: 500 });
      })
      .then(followings => _.sortBy(followings.collection, ['username']));
  }
};
