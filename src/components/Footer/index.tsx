import { Styled } from './styled';

export const Footer: React.FC = () => {
  const year: number = new Date().getFullYear();

  return (
    <Styled>© {year} DoSneakers</Styled>
  );
};

Footer.displayName = 'Footer';
