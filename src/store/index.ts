import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { dataReducer } from './kanyeData/reducers';
import mySaga from './kanyeData/sagas';

export const rootReducer = combineReducers({
  dataReducer,
});
export type RootReducerType = ReturnType<typeof rootReducer>;
// 타입스크립트에서는 역시 이 부분이 필요합니다.

export function* rootSaga() {
  yield all([mySaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}
