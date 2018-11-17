import * as types from './actionTypes';
import { API_URL } from '../constants';
import axios from 'axios/index';

export const fetchProducts = () => {
  return dispatch => {
    return axios.get(`${API_URL}5b3de5ed310000db1f6de257`)
      .then((response) => {
        return dispatch({type: types.FETCH_PRODUCT, products: response});
      })
      .catch((error) => {
        console.log(error);
      })
  }
};
