import axios from 'axios';

import { DEFAULT_ERROR_MESSAGE } from './../constants/States';
import { USER_DATA_FETCH_API } from './../constants';

const defaultQuery = {
  start_date: '',
  end_date: ''
}

/**
 * API to fetch the user data
 * If the response is not 200(ok), throw an error with the message. Else, return the response.
 */
export const fetchUserDataApi = (queryData = defaultQuery) => {
  return axios({ url: `${USER_DATA_FETCH_API}?start_date=${queryData.start_date}&end_date=${queryData.end_date}`, method: 'get' })
    .then(res => res.data);
}