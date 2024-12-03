import styled from 'styled-components';
import { theme } from '../theme';

interface isButton {
  children?: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: isButton) => {
  return (
    <>
      <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.button`
  &:active {
    outline: none;
    border: none;
  }
  &:hover {
    outline: none;
    border: none;
  }
  color: ${theme.color.white};
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 364px;
  height: 44px;
  border-radius: 10px;
  background-color: ${theme.color.main[2]};
  cursor: pointer;
`;
