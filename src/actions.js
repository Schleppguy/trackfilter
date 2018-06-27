import { createAction } from 'redux-actions';
import { scGetTracks, scGetPlayer, scAuth, scGetMyFollowings } from './scFetch';

//Tracks
export const appendNewTracks = createAction('APPEND_NEW_TRACKS');
export const newTracksAppended = createAction('NEW_TRACKS_APPENDED');
export const newTracksAppendFailed = createAction('NEW_TRACKS_APPEND_FAILED');

//Followings
export const appendNewFollowings = createAction('APPEND_NEW_FOLLOWINGS');
export const newFollowingsAppended = createAction('NEW_FOLLOWINGS_APPENDED');
export const newFollowingsAppendFailed = createAction(
  'NEW_FOLLOWINGS_APPEND_FAILED'
);

//Filters
export const setTrackNameFilter = createAction('SET_TRACK_NAME_FILTER');
export const setArtistNameFilter = createAction('SET_ARTIST_NAME_FILTER');
export const setGenreFilter = createAction('SET_GENRE_FILTER');
export const setMultipleArtistsFilter = createAction(
  'SET_MULTIPLE_ARTISTS_FILTER'
);
export const setDurationFilter = createAction('SET_DURATION_FILTER');

//session
export const setOauthToken = createAction('SET_OAUTH_TOKEN');

//Player
export const loadTrack = createAction('LOAD_TRACK');
export const trackLoaded = createAction('TRACK_LOADED');
export const loadTrackFailed = createAction('LOAD_TRACK_FAILED');
export const togglePlay = createAction('TOGGLE_PLAY');
export const updateVolume = createAction('UPDATE_VOLUME');

// async
export const getNewTracks = cursor => {
  return dispatch => {
    dispatch(appendNewTracks());
    scGetTracks(cursor).then(tracks =>
      dispatch(newTracksAppended(tracks)).catch(error =>
        dispatch(newTracksAppendFailed(error))
      )
    );
  };
};

export const getMyFollowings = cursor => {
  return dispatch => {
    dispatch(appendNewFollowings());
    scGetMyFollowings(cursor).then(followings =>
      dispatch(newFollowingsAppended(followings)).catch(error =>
        dispatch(newFollowingsAppendFailed(error))
      )
    );
  };
};

export const startSession = () => {
  return dispatch => {
    scAuth()
      .then(session => {
        console.log('session', session);
        dispatch(setOauthToken(session.oauth_token));
        dispatch(getNewTracks(null));
        dispatch(getMyFollowings(null));
      })
      .catch(error => console.error(error));
  };
};

export const loadTrackToPlayer = (track, volume) => {
  return dispatch => {
    dispatch(loadTrack());
    scGetPlayer(track)
      .then(player => {
        player.setVolume(volume / 100);
        return player;
      })
      .then(player => {
        player.play();
        dispatch(togglePlay(true));
        dispatch(trackLoaded({ track: track, audio: player })).catch(error =>
          dispatch(loadTrackFailed(error))
        );
      });
  };
};
