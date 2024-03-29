import './App.css';

import React from 'react';
import { useColorMode } from '@chakra-ui/react';

import { Authcontext } from './context/auth-context';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

/* HOOKS */
import { useMediaQuery } from '@react-hook/media-query';
import { useState, useCallback,useEffect } from 'react';
import InfoPage from './info/pages/InfoPage';
import Auth from './auth/pages/Auth';
import TermsPage from './terminos/TermsPage';

function App() {

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60); // 1 hour
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if(storedData && storedData.token && new Date(storedData.expiration) > new Date()){
      login(storedData.userId,storedData.token,new Date(storedData.expiration));
    }
  },[login])

  let routes;



  if (!token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <InfoPage />
        </Route>
        <Route path="/auth/login">
          <Auth isLoging={true} />
        </Route>
        <Route path="/auth/signup">
          <Auth isLoging={false} />
        </Route>
        <Route path="/terminos" exact>
          <TermsPage/>
        </Route>
        <Redirect to="/auth/login" />
      </Switch>
    );
  } else {

    routes = (
    <Switch>
        <Route path="/" exact>
          <InfoPage />
        </Route>
        <Route path="/terminos" exact>
          <TermsPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
      )
  }


  //default dark color mode
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
      if(colorMode === "light"){
        toggleColorMode();
      }
  }, [colorMode,toggleColorMode])
  

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
