import {
  Styled,
  Main
} from './styled';
import {
  Header,
  Navbar,
  Footer
} from 'src/components';

export const Layout: React.FC = ({ children }) => {
  return (
    <Styled>
      <Header />
      <Main>
        <Navbar />
        {children}
      </Main>
      <Footer />
    </Styled>
  );
};

Layout.displayName = 'Layout';
