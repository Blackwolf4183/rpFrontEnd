import React from 'react';
import {NavLink} from 'react-router-dom';
import { IconButton,Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser, faRightToBracket} from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { Authcontext } from '../../context/auth-context';

const AuthButton = () => {
  
    const auth = useContext(Authcontext);
  
    const logout = () => {
        if (auth.isLoggedIn) {
          auth.logout();
        }
      };

    if(auth.isLoggedIn){
      return (
        <Button  onClick={logout}>
              Cerrar Sesión
              <FontAwesomeIcon style={{"margin-left":"15px"}} icon={faRightToBracket}/>
            </Button>
      )
    }else{
      return (
        <NavLink to="/auth">
          <Button colorScheme={"teal"}>
              Iniciar Sesión
              <FontAwesomeIcon style={{"margin-left":"15px"}} icon={faRightToBracket}/>
            </Button>
        </NavLink>
      );
    }
    
};

export default AuthButton;
