import { useSelector } from 'react-redux';
import { RootReducerType } from '../index';
import { KanyeDataState } from './state';

// eslint-disable-next-line max-len
export const useKanyeDataState = (): KanyeDataState => useSelector((state: RootReducerType) => state.dataReducer);

export default useKanyeDataState;
