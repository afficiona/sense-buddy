import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './../utils/history';
import User from './User';
import UI from './UI';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    UI,
    User,
  });

  return rootReducer;
}
