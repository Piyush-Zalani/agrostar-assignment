import initialState from './initialState';
import {FETCH_PRODUCT} from '../actions/actionTypes';

export default function products(state = initialState.products, action){
  let newState;
  switch (action.type) {
    case FETCH_PRODUCT:
      newState = action.products;
      return newState;
    default:
      return state;
  }
}
