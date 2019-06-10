import { fetchUserDataApi } from '../api';
import * as TYPES from './../constants/ActionTypes';

export const getUserData = queryData => dispatch => {
  dispatch({ type: TYPES.USER_DATA_FETCH_INIT });

  return fetchUserDataApi(queryData)
    .then(data => {
      dispatch({
        type: TYPES.USER_DATA_FETCH_SUCCESS,
        data
      });
    })
    .catch(error => {
      dispatch({ type: TYPES.USER_DATA_FETCH_ERROR, error });
    });
};
