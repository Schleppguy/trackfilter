import { combineReducers } from 'redux';
import funcounter from './funcounter';
import tracks from './tracks';
import client from './client';

const reducers = combineReducers({
  funcounter,
  tracks,
  client
});

export default reducers;
