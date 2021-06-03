import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Styled = styled.footer`
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 20px 16px;
  text-align: center;
  font-size: 0.875rem;

  @media(min-width: 768px) {
    padding: 20px 24px;
    font-size: 1rem;
  }
`;

const ROOT = 'Footer';
Styled.displayName = `${ROOT}/Styled`;
