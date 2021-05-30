import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Styled = styled.header`
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 18px 24px;
`;

const ROOT = 'Header';
Styled.displayName = `${ROOT}/Styled`;