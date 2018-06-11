import { handleActions } from 'redux-actions';
import { loadTrack, trackLoaded, loadTrackFailed } from '../actions';

const defaultState = {
  loading: false,
  track: null,
  audio: null,
  isPlaying: false,
  isMuted: false,
  volume: 1,
  currentTime: 0,
  duration: 0,
  isSeeking: false,
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
      loading: false
    }),
    [loadTrackFailed]: (state, { payload }) => ({
      ...state,
      lastError: payload,
      loading: false
    })
  },
  defaultState
);

export default player;
