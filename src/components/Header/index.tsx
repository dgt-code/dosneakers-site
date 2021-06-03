import { Styled, Link } from './styled';
import { Logotipo } from 'src/icons';

export const Header: React.FC = () => (
  <Styled>
    <Link to="/" title="Inicio">
      <Logotipo />
    </Link>
  </Styled>
);

Header.displayName = 'Header';
