import { createAction } from 'redux-actions';
import { scGetTracks } from './scFetch';

export const addFun = createAction('ADD_FUN');
export const appendNewTracks = createAction('APPEND_NEW_TRACKS');

// async
export const getNewTracks = () => {
  return dispatch => {
    scGetTracks().then(tracks =>
      dispatch(appendNewTracks(tracks)).catch(error =>
        dispatch(appendNewTracks(error))
      )
    );
  };
};

export const startSession = () => {
  return dispatch => {
    dispatch(getNewTracks());
  };
};
