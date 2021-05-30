import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Styled = styled.footer`
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 20px 24px;
`;

const ROOT = 'Footer';
Styled.displayName = `${ROOT}/Styled`;