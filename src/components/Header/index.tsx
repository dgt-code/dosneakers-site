import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Styled,
  Checkbox,
  MenuWrapper,
  LogoWrapper,
  AuthSessionWrapper,
  IconWrapper,
  Link,
  UserIconWrapper,
  Overlay
} from './styled';
import { Menu, AuthSession } from 'src/components';
import { Menu as MenuIcon, User, Logotipo } from 'src/icons';
import { DEVICE_SIZE } from 'src/ui';
import { useResize } from 'src/hooks';

interface Props {
  isAuth?: boolean;
}

export const Header: React.FC<Props> = ({ isAuth = false }) => {
  const isResponsive = useResize(DEVICE_SIZE.TABLET);

  useEffect(() => {
    !isResponsive && closeMenu();
  }, [isResponsive]);

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
    isOpen
      ? document.getElementsByTagName('body')[0].style.overflowY = 'auto'
      : document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
  };

  const history = useHistory();

  const handleClickUserIcon = () => {
    history.push('/mi-perfil')
  };

  return (
    <React.Fragment>
      <Styled>
        <Checkbox
          checked={isOpen}
          onChange={openMenu}
          onClick={openMenu} />
        <MenuWrapper>
          <Menu
            isAuth={isAuth}
            onCloseMenu={closeMenu} />
        </MenuWrapper>
        <LogoWrapper>
          <IconWrapper>
            <MenuIcon
              width={24}
              height={24} />
          </IconWrapper>
          <Link to="/" title="Inicio">
            <Logotipo />
          </Link>
        </LogoWrapper>
        <AuthSessionWrapper>
          <AuthSession isAuth={isAuth} />
        </AuthSessionWrapper>
        <UserIconWrapper onClick={handleClickUserIcon}>
          <User />
        </UserIconWrapper>
      </Styled>
      { isOpen && <Overlay onClick={closeMenu} />}
    </React.Fragment>
  );
};

Header.displayName = 'Header';
