import styled from 'styled-components';
import { theme } from '../../theme';

interface isKeyWord {
  children: string;
}

export const KeyWordBtn = ({ children }: isKeyWord) => {
  return (
    <>
      <BtnContainer>{children}</BtnContainer>
    </>
  );
};

const BtnContainer = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: ${theme.color.main[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.color.white};
  font-weight: 700;
`;
