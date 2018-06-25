import { combineReducers } from 'redux';
import tracks from './tracks';
import client from './client';
import player from './player';
import followings from './followings';

const reducers = combineReducers({
  tracks,
  client,
  player,
  followings
});

export default reducers;
