import SC from 'soundcloud';
import _ from 'lodash';

const DEFAULT_USER_ID = '7742327';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI
});

export const getCursor = nextHref => {
  console.log('nextHref', nextHref);
  console.log(nextHref.split('cursor=')[1].split('&')[0]);

  return nextHref === null
    ? nextHref
    : nextHref.split('cursor=')[1].split('&')[0];
};

export const scAuth = () => {
  return process.env.NODE_ENV === 'development'
    ? new Promise(resolve => resolve('development'))
    : SC.connect().then(session => {
        console.log(session);
      });
};

export const scGetTracks = cursor => {
  const options = cursor
    ? { limit: 200, streamable: true, cursor }
    : { limit: 200, streamable: true };

  return process.env.NODE_ENV === 'development'
    ? SC.get(`/users/${DEFAULT_USER_ID}/favorites`).then(tracks => {
        return { collection: tracks, cursor: null };
      })
    : SC.get('/me/activities/tracks/affiliated', options).then(tracks => {
        const collection = _.map(
          _.filter(
            tracks.collection,
            o => o.type === 'track' && !_.isNull(o.origin)
          ),
          'origin'
        );
        const nextHref = getCursor(tracks.next_href);
        return { collection, cursor: nextHref };
      });
};

export const scGetPlayer = track => {
  return SC.stream(`/tracks/${track.id}`);
};

export const scGetFollowings = user => {
  return SC.get(`/users/${user}/followings`).then(followings => {
    console.log(followings.next_href);
    return _.sortBy(followings.collection, [o => o.username.toLowerCase()]);
  });
};

export const scGetMyFollowings = () => {
  if (process.env.NODE_ENV === 'development') {
    return scGetFollowings(DEFAULT_USER_ID);
  } else {
    return SC.get('/me/followings').then(followings =>
      _.sortBy(followings.collection, [o => o.username.toLowerCase()])
    );
  }
};
