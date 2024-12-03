import styled from 'styled-components';
import { theme } from '../theme';
import { Inputs } from '../components/user/Inputs';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate();

  const signupClick = () => {
    navigate('/postcheck');
  };

  return (
    <SignUpContainer>
      <Title>회원가입</Title>
      <InputsContainer>
        <BtnInputContainer>
          <Inputs
            isType={false}
            placeholder="이메일을 입력하세요"
            label="이메일"
          />
          <Btn>send</Btn>
        </BtnInputContainer>
        <BtnInputContainer>
          <Inputs
            isType={false}
            placeholder="인증코드를 입력하세요"
            label="인증코드"
          />
          <Btn>Check</Btn>
        </BtnInputContainer>
        <Inputs
          isType={false}
          placeholder="닉네임을 입력하세요"
          label="닉네임"
        />

        <Inputs
          isType={true}
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
        />
        <Inputs
          isType={true}
          placeholder="비밀번호를 다시 입력하세요"
          label="비밀번호 확인"
        />
      </InputsContainer>
      <Button children="회원가입" onClick={signupClick} />
    </SignUpContainer>
  );
};

const BtnInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
  width: 364px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${theme.color.main[3]};
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Btn = styled.button`
  &:active {
    outline: none;
    border: none;
  }
  &:hover {
    outline: none;
    border: none;
  }
  color: ${theme.color.white};
  font-weight: 400;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 100px;
  background-color: ${theme.color.main[3]};
  cursor: pointer;
`;

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 70px;
  margin-top: 60px;
`;
