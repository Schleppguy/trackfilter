import { combineReducers } from 'redux';
import funcounter from './funcounter';
import tracks from './tracks';
import client from './client';
import player from './player';

const reducers = combineReducers({
  funcounter,
  tracks,
  client,
  player
});

export default reducers;
