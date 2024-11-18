import styled from 'styled-components';
import { theme } from '../theme';

interface isButton {
  children: string;
  onClick?: () => void;
  selected: boolean;
}

export const CheckBtn = ({ children, onClick, selected }: isButton) => {
  return (
    <>
      <Btn onClick={onClick} selected={selected}>
        {children}
      </Btn>
    </>
  );
};

const Btn = styled.button<{ selected: boolean }>`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.selected ? `${theme.color.main[2]}` : `${theme.color.white}`};
  border: 2px solid ${theme.color.main[2]};
  color: ${(props) =>
    props.selected ? `${theme.color.white}` : `${theme.color.main[2]}`};
  font-size: 16px;
  font-weight: 700;
`;
