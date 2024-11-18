import styled from 'styled-components';
import { theme } from '../../theme';

export const ContentsInput = () => {
  return (
    <>
      <InputContainer>
        <Label>고민 내용</Label>
        <Inputs placeholder="고민을 입력하세요" />
      </InputContainer>
    </>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Inputs = styled.textarea`
  outline-color: ${theme.color.main[3]};
  width: 900px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${theme.color.gray[2]};
  padding: 20px 0 0 20px;
  font-size: 16px;
  height: 582px;
  resize: none;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;
