import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  Styled,
  Link
} from './styled';

export const Navbar: React.FC = () => {
  const history = useHistory();
  const currentView = history.location.pathname;

  const isSelectedView = (currentView: string, view: string): boolean => {
    return currentView === view;
  };

  const items = [
    {
      label: 'Inicio',
      to: '/',
      selected: isSelectedView(currentView, '/')
    },
    {
      label: 'Catálogo',
      to: '/catalogo',
      selected: isSelectedView(currentView, '/catalogo')
    },
    {
      label: 'Acerca de nosotros',
      to: '/nosotros',
      selected: isSelectedView(currentView, '/nosotros')
    },
    {
      label: 'Contáctanos',
      to: '/contactanos',
      selected: isSelectedView(currentView, '/contactanos')
    }
  ];

  return (
    <Wrapper>
      <Styled>
        { items.map((item, key) =>
          <Link
            key={key}
            to={item.to}
            title={item.label}
            selected={item.selected}>
            {item.label}
          </Link> )}
      </Styled>
    </Wrapper>
  );
};

Navbar.displayName = 'Navbar';
