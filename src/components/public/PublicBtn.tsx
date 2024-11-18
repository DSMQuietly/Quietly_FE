import styled from 'styled-components';
import { theme } from '../../theme';

interface isButton {
  children: string;
}

export const PublicBtn = ({ children }: isButton) => {
  return (
    <>
      <Btn onClick={onclick}>{children}</Btn>
    </>
  );
};

const Btn = styled.button`
  &:active {
    outline: none;
    border: none;
  }
  &:hover {
    outline: none;
    border: none;
  }
  width: 150px;
  height: 48px;
  border-radius: 10px;
  background-color: ${theme.color.main[3]};
  color: ${theme.color.white};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
