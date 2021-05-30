import {
  Styled,
  Wrapper,
  Main
} from './styled';
import { Header, Footer } from 'src/components';

export const Layout: React.FC = ({ children }) => {
  return (
    <Styled>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </Styled>
  );
};

Layout.displayName = 'Layout';