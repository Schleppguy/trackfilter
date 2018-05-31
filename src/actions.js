import { createAction } from 'redux-actions';
import { scGetTracks } from './scFetch';

export const addFun = createAction('ADD_FUN');
export const appendNewTracks = createAction('APPEND_NEW_TRACKS');
export const newTracksAppended = createAction('NEW_TRACKS_APPENDED');
export const newTracksAppendFailed = createAction('NEW_TRACKS_APPEND_FAILED');
export const setTrackNameFilter = createAction('SET_TRACK_NAME_FILTER');
export const setArtistNameFilter = createAction('SET_ARTIST_NAME_FILTER');

// async
export const getNewTracks = () => {
  return dispatch => {
    dispatch(appendNewTracks());
    scGetTracks().then(tracks =>
      dispatch(newTracksAppended(tracks)).catch(error =>
        dispatch(newTracksAppendFailed(error))
      )
    );
  };
};

export const startSession = () => {
  return dispatch => {
    dispatch(getNewTracks());
  };
};
