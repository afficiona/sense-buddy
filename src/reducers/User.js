import { fromJS } from 'immutable';

import * as TYPES from './../constants/ActionTypes';
import { normalizeUserData } from './../utils/normalizer';

/**
 * Store to manage currency related data.
 * The flag icons courtesy: https://www.flaticon.com/free-icons/india-flag
 */
const initialState = fromJS({
  user: {
    isFetching: true,
    error: null,
    data: null
  }
});

export default function(state = initialState, action = {}) {
  let updatedCurrencyList;

  switch (action.type) {
    case TYPES.USER_DATA_FETCH_INIT:
      return state.mergeIn(['user'], {
        isFetching: true,
        error: null,
        data: null
      });

    case TYPES.USER_DATA_FETCH_SUCCESS:
      return state.mergeIn(['user'], {
        isFetching: false,
        error: null,
        data: normalizeUserData(action.data),
      });

    case TYPES.USER_DATA_FETCH_ERROR:
      return state.mergeIn(['user'], {
        isFetching: false,
        error: action.error.message,
        data: null
      });

    default:
      return state;
  }
}
