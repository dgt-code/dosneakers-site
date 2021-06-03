import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { COLORS } from 'src/ui';

export const Wrapper = styled.div`
  display: none;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 24px 40px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    display: flex;
  }
`;

export const Styled = styled.nav`
  display: inline-grid;
  grid-auto-flow: column;
  grid-column-gap: 40px;
`;

interface LinkProps {
  selected: boolean;
}

export const Link = styled(LinkRouter)<LinkProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.selected
    ? COLORS.BLUE
    : COLORS.BLACK}
`;

const ROOT = 'Navbar';
Wrapper.displayName = `${ROOT}/Wrapper`;
Styled.displayName = `${ROOT}/Styled`;
Link.displayName = `${ROOT}/Link`;
