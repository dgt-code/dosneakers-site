import { Styled } from './styled';

interface Props {
  label: string;
}

export const Field: React.FC<Props> = ({ label, children }) => (
  <Styled>
    <label>{label}</label>
    {children}
  </Styled>
);

Field.displayName = 'Field';
