import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestData } from './store/actions';
import { RootReducerType } from './store/reducers';
import Index from './pages';

function App() {
  const dispatch = useDispatch();
  const sagaData = useSelector((state: RootReducerType) => state.dataReducer);
  useEffect(() => {
    dispatch(requestData());
    console.log(sagaData);
  }, []);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          dispatch(requestData());
        }}
      >
        fetch
      </button>
      <div>{sagaData.quote}</div>
      <BrowserRouter>
        <Route path="/" component={Index} />
      </BrowserRouter>
    </div>
  );
}

export default App;
