import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const LoggedUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${COLORS.BLUE};
  }
`;

export const UserSpan = styled.span`
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const Separator = styled.span`
  color: ${COLORS.GRAY_CD};
  padding: 0 10px;
  box-sizing: border-box;

  &::after {
    content: '|'
  }
`;

export const UserActions = styled.div`
  ${Separator}:first-child {
    display: none;
  }

  @media(min-width: 768px) {
    ${Separator}:first-child {
      display: inline;
    }
  }
`;


export const LogoutSpan = styled.span`
  color: ${COLORS.BLUE};
  cursor: pointer;
`;

export const SignUpSpan = styled.span`
  cursor: pointer;
`;

export const OrSpan = styled.span`
  padding: 0 4px;
  box-sizing: border-box;
`;

export const SignInSpan = styled.span`
  color: ${COLORS.BLUE};
  cursor: pointer;
`;

const ROOT = 'AuthSession';
LoggedUser.displayName = `${ROOT}/LoggedUser`;
UserSpan.displayName = `${ROOT}/UserSpan`;
Separator.displayName = `${ROOT}/Separator`;
UserActions.displayName = `${ROOT}/UserActions`;
LogoutSpan.displayName = `${ROOT}/LogoutSpan`;
SignUpSpan.displayName = `${ROOT}/SignUpSpan`;
OrSpan.displayName = `${ROOT}/OrSpan`;
SignInSpan.displayName = `${ROOT}/SignInSpan`;
