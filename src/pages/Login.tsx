import styled from 'styled-components';
import { Inputs } from '../components/user/Inputs';
import { theme } from '../theme';
import { Button } from '../components/Button';

interface isLogin {
  loginProp: () => void;
}

export const Login = ({ loginProp }: isLogin) => {
  const backClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      loginProp();
    }
  };

  return (
    <ModalContainer onClick={backClick}>
      <LoginModal>
        <Title>로그인</Title>
        <InputsContainer>
          <Inputs
            isType={false}
            placeholder="이메일을 입력하세요"
            label="이메일"
          />
          <Inputs
            isType={true}
            placeholder="비밀번호를 입력하세요"
            label="비밀번호"
          />
        </InputsContainer>
        <BtnContainer>
          <Button children="로그인" />
          <SignUpBtn>회원가입</SignUpBtn>
        </BtnContainer>
      </LoginModal>
    </ModalContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const SignUpBtn = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: ${theme.color.gray[2]};
  font-weight: 400;
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: ${theme.color.gray[5]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${theme.color.main[3]};
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LoginModal = styled.div`
  background-color: ${theme.color.white};
  width: 478px;
  height: 510px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 43px;
`;
