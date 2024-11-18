import styled from 'styled-components';
import { theme } from '../../theme';

export const TitleInput = () => {
  return (
    <InputContainer>
      <Label>제목</Label>
      <Inputs type="text" placeholder='제목을 입력하세요'/>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Inputs = styled.input`
  outline-color: ${theme.color.main[3]};
  width: 900px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${theme.color.gray[2]};
  padding: 0 0 0 20px;
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;
