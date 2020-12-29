import React, {useEffect} from 'react';
import { requestData } from './store/actions';
import { useSelector, useDispatch } from "react-redux";
import { RootReducerType } from './store/reducers';

function App() {
  const dispatch = useDispatch();
  const sagaData = useSelector((state: RootReducerType) => state.dataReducer);
  useEffect(() => {
    dispatch(requestData());
    console.log(sagaData);
  }, [])

  return (
      <div className="App">
        <button onClick={() => {
          dispatch(requestData())
        }} >fetch</button>
        <div>
          {sagaData.quote}
        </div>
      </div>
  );
}

export default App;
