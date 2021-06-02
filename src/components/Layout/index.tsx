import {
  Styled,
  Main
} from './styled';
import { Header, Footer } from 'src/components';

export const Layout: React.FC = ({ children }) => {
  return (
    <Styled>
        <Header />
        <Main>{children}</Main>
        <Footer />
    </Styled>
  );
};

Layout.displayName = 'Layout';