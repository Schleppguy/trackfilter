import { handleActions } from 'redux-actions';
import { loadTrack, trackLoaded, loadTrackFailed, togglePlay, updateVolume } from '../actions';

const defaultState = {
  loading: false,
  track: null,
  audio: null,
  isPlaying: false,
  isMuted: false,
  volume: 1,
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
      volume: payload
    })
  },
  defaultState
);

export default player;
