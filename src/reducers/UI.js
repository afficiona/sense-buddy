import { fromJS } from 'immutable';

import { normalizeCustomersList } from './../utils/normalizer';
import * as TYPES from './../constants/ActionTypes';

/**
 * Store to control and manage UI related data of the entire app.
 * Like, active state of Currency Menu or Toastr.
 */
const initialState = fromJS({
  currencyMenu: {
    isOpen: false,
  },
  toastr: {
    isActive: false,
    text: null
  }
});

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case TYPES.SET_UI_DATA:
      return state.mergeIn(action.path, action.data);

    default:
      return state;
  }
}
