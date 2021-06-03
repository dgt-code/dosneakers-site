import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { COLORS } from 'src/ui';

export const Styled = styled.header`
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 8px 16px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    padding: 12px 24px;
  }
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
`;

const ROOT = 'Header';
Styled.displayName = `${ROOT}/Styled`;
