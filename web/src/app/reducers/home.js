import * as types from '../constants/ActionTypes'
import { handleActions, } from 'redux-actions';

const initialState = {
  show_list: [],
};

const handler = {};

handler[types.RECEIVE_SHOWLIST] = (state, action) => {
  const { show_list, } = action;
  return {
    ...state,
    show_list,
  };
};

export default handleActions(handler, initialState);
