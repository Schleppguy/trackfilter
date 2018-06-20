import { handleActions } from 'redux-actions';
import {
  loadTrack,
  trackLoaded,
  loadTrackFailed,
  togglePlay,
  updateVolume
} from '../actions';

const defaultState = {
  loading: false,
  track: null,
  audio: null,
  isPlaying: false,
  currentVolume: 100,
  lastVolume: 0,
  duration: 0,
  lastError: null
};

const player = handleActions(
  {
    [loadTrack]: (state, { payload }) => ({
      ...state,
      loading: true
    }),
    [trackLoaded]: (state, { payload }) => ({
      ...state,
      track: payload.track,
      audio: payload.audio,
      loading: false,
      duration: payload.track.duration / 1000
    }),
    [loadTrackFailed]: (state, { payload }) => ({
      ...state,
      lastError: payload,
      loading: false
    }),
    [togglePlay]: (state, { payload }) => ({
      ...state,
      isPlaying: payload
    }),
    [updateVolume]: (state, { payload }) => ({
      ...state,
      currentVolume: payload,
      lastVolume: state.currentVolume
    })
  },
  defaultState
);

export default player;
