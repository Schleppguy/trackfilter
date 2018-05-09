import SC from 'soundcloud';
import _ from 'lodash';

SC.initialize({
  client_id: process.env.REACT_APP_SC_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
});

export const getTracks = () => {
  if (process.env.REACT_APP_ENV === 'development') {
    return SC.get('/users/7742327/favorites')
      .then(favorites => favorites)
      .catch(err => {
        throw new Error(`scFetch-development getTracks: ${err.message}`)
      });
  } else {
    return SC.connect()
      .then(() => {      
        return SC.get('/me/activities/tracks/affiliated', {limit: 500, streamable: true});
      })
      .then(tracks => {
        const collection = tracks.collection.filter(t => t.type === 'track')
        return collection
      })
      .catch(err => {
        throw new Error(`scFetch-development getTracks: ${err.message}`)
      });
      // }).then(() => {
      //   return SC.get('/me/followings', {limit: 500});
      // }).then(followings => {
      //   this.setState({ followings: _.sortBy(followings.collection, ['username']) });
      // });
  }
};

export const getFollowings = user => {
  return SC.get(`/users/${user}/followings`, {limit: 500})
}
