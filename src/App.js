import './App.css';

import React from 'react';
import MainDesktopPage from './main/pages/MainDesktopPage';
import MainMobilePage from './main/pages/MainMobilePage';

import { Authcontext } from './context/auth-context';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from 'react-router-dom';

/* HOOKS */
import { useMediaQuery } from '@react-hook/media-query';
import { useState } from 'react';
import InfoPage from './info/pages/InfoPage';
import Auth from './auth/pages/Auth';

function App() {
  const isInPhone = useMediaQuery('(max-width:680px)');

  const [token, setToken] =
    useState(null); /* TODO: cambiar de momento es dummy */
  const [userId, setUserId] = useState(null);

  const login = () => {};

  const logout = () => {};

  let routes;

  //rutas para logeados y no logeados en principio son las mismas
  routes = (
    <Switch>
      <Route path="/" exact>
        {isInPhone ? <MainMobilePage /> : <MainDesktopPage />}{' '}
      </Route>
      <Route path="/main">
        <InfoPage />
      </Route>
      <Route path="/auth/login">
        <Auth isLoging={true} />
      </Route>
      <Route path="/auth/signup">
        <Auth isLoging={false} />
      </Route>
      <Redirect to="/auth/login" />
    </Switch>
  );

  return (
    <Authcontext.Provider
      value={{
        isLoggedIn: !!token, //this will be true if there is a token
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <main>{routes}</main>
      </Router>
    </Authcontext.Provider>
  );
}

export default App;
