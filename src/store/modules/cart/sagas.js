import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  console.tron.log(id);
  const response = yield call(api.get, `/products/${id}`);

  console.tron.log(response);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
