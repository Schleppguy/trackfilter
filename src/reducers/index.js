import { combineReducers } from 'redux';
import funcounter from './funcounter';
import tracks from './tracks';
import client from './client';
import player from './player';
import followings from './followings';

const reducers = combineReducers({
  funcounter,
  tracks,
  client,
  player,
  followings
});

export default reducers;
