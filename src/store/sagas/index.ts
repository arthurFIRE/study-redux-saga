import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_DATA, receiveData } from '../actions';
import fetchData from '../../api';

function* getApiData() {
  try {
    const data = yield call(fetchData);
    yield put(receiveData(data));
  } catch (err) {
    console.log(err);
  }
}
export default function* mySaga() {
  yield takeLatest(REQUEST_DATA, getApiData);
}
