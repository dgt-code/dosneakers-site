import React from 'react';
import { Link } from 'react-router-dom';
import {
  LoggedUser,
  UserSpan,
  UserActions,
  Separator,
  LogoutSpan,
  SignUpSpan,
  OrSpan,
  SignInSpan
} from './styled';

interface Props {
  isAuth?: boolean;
}

export const AuthSession: React.FC<Props> = ({
  isAuth = false
}) => {
  const openSignUpModal = () => {
    console.log('openSignUpModal');
  };

  const openSignInModal = () => {
    console.log('openSignInModal');
  };

  return (
    <React.Fragment>
      { isAuth
        ? <LoggedUser>
            <UserSpan>Luis</UserSpan>
            <UserActions>
              <Separator />
              <Link to="/mi-perfil">Mi Perfil</Link>
              <Separator />
              <LogoutSpan>Salir</LogoutSpan>
            </UserActions>
          </LoggedUser>
        : <React.Fragment>
            <SignUpSpan onClick={openSignUpModal}>Regístrate</SignUpSpan>
            <OrSpan>o</OrSpan>
            <SignInSpan onClick={openSignInModal}>Ingresa</SignInSpan>
          </React.Fragment> }
    </React.Fragment>
  );
};

AuthSession.displayName = 'AuthSession';
