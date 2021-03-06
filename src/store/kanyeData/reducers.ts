import { RECEIVE_DATA, receiveData } from './actions';
import { KanyeDataState } from './state';

type dataActionType = ReturnType<typeof receiveData>;
// 이 부분은 리덕스에 존재하는 메소드의 타입을 지정해줍니다.
const initialState: KanyeDataState = {
  quote: 'jesus',
};

// eslint-disable-next-line import/prefer-default-export
export const dataReducer = (state: KanyeDataState = initialState, action: dataActionType) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
};
