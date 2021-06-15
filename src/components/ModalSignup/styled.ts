import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 268px;
  max-width: 450px;
  padding: 16px;

  @media(min-width: 768px) {
    padding: 20px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${COLORS.BLACK};
  padding-bottom: 5px;
  box-sizing: border-box;
`;

export const Description = styled.div`
  width: 100%;
  color: ${COLORS.GRAY_75};
  padding-bottom: 20px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  width: 100%;

  @media(min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid ${COLORS.GRAY_CD};
  border-radius: 4px;
  background-color: #f5f6f7;
  color: ${COLORS.BLACK};
  outline: none;

  &::placeholder {
    color: #8e959f;
  }
`;

export const InputFull = styled(Input)`
  @media(min-width: 768px) {
    grid-column: 1/3;
  }
`;

export const Select = styled.select``;

export const Button = styled.button``;
