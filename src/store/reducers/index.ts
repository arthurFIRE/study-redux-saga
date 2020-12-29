import { combineReducers } from "redux";
import { dataReducer } from './dataReducer';
export const rootReducer = combineReducers({
    dataReducer
})
export type RootReducerType = ReturnType<typeof rootReducer>
// 타입스크립트에서는 역시 이 부분이 필요합니다.