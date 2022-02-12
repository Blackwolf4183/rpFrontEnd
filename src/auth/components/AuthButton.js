import React from 'react';
import {NavLink} from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';

import { useContext } from 'react';
import { Authcontext } from '../../context/auth-context';

const AuthButton = () => {
  
    const auth = useContext(Authcontext);
  
    const logout = () => {
        if (auth.isLoggedIn) {
          auth.logout();
        }
      };

    return (
    <NavLink to="/auth">
      <IconButton onClick={logout} colorScheme="teal">
        <FontAwesomeIcon
          style={{ fontSize: '20px' }}
          icon={auth.isLoggedIn ? faSignOutAlt : faUser}
        />
      </IconButton>
    </NavLink>
  );
};

export default AuthButton;
