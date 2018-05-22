import { handleActions } from 'redux-actions';
import { addFun } from '../actions';

const defaultState = {
  funcount: 0
};

const funcounter = handleActions(
  {
    [addFun]: (state, { payload }) => ({
      ...state,
      funcount: state.funcount + payload
    })
  },
  defaultState
);

export default funcounter;
