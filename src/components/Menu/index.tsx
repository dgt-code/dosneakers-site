import React from 'react';
import { Link } from 'react-router-dom';
import {
  Styled,
  LogoWrapper,
  LinkStyled,
  XIconWrapper,
  AuthSessionItem,
  Item
} from './styled';
import { AuthSession } from 'src/components';
import { Logotipo, X } from 'src/icons';

interface Props {
  isAuth?: boolean;
  onCloseMenu: () => void;
}

export const Menu: React.FC<Props> = ({
  isAuth = false,
  onCloseMenu
}) => {
  const items = [
    {
      label: 'Inicio',
      to: '/'
    },
    {
      label: 'Catálogo',
      to: '/catalogo'
    },
    {
      label: 'Acerca de nosotros',
      to: '/nosotros'
    },
    {
      label: 'Contáctanos',
      to: '/contactanos'
    }
  ];

  return (
    <Styled>
      <LogoWrapper>
        <LinkStyled to="/" title="Inicio">
          <Logotipo />
        </LinkStyled>
        <XIconWrapper onClick={onCloseMenu}>
          <X />
        </XIconWrapper>
      </LogoWrapper>
      <AuthSessionItem>
        <AuthSession isAuth={isAuth} />
      </AuthSessionItem>
      { items.map((item, key) =>
        <Item key={key}>
          <Link to={item.to}>{item.label}</Link>
        </Item> )}
    </Styled>
  );
};

Menu.displayName = 'Menu';
