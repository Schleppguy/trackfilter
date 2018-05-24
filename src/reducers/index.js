import { combineReducers } from 'redux';
import funcounter from './funcounter';
import tracks from './tracks';

const reducers = combineReducers({
  funcounter,
  tracks
});

export default reducers;
