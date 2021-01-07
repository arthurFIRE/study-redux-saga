import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Amplify, { Auth } from 'aws-amplify';
import { requestData } from './store/kanyeData/actions';
import Index from './pages';
import Login from './pages/Login';
import useKanyeDataState from './store/kanyeData/hooks';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const dispatch = useDispatch();
  const sagaData = useKanyeDataState();
  const [userData, setUserData] = useState();
  useEffect(() => {
    Amplify.configure({
      Auth: {
        region: process.env.REACT_APP_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
      },
    });

    Auth.currentUserInfo().then((user) => {
      console.log('user ', user);
      setUserData(user);
    });

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
      <br />
      {`user : ${userData && JSON.stringify(userData)}`}
      <SignIn />
      <SignUp />
      <BrowserRouter>
        <Link to="/login">로그인</Link>
        <br />
        <br />
        <Route path="/" component={Index} exact />
        <Route path="/login" component={Login} exact />
      </BrowserRouter>
      <button
        type="button"
        onClick={() => {
          Auth.signOut();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default App;
