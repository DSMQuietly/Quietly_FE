import { Header } from '../components/public/Header';
import logo from '../assets/mainpage/logo.svg';
import styled from 'styled-components';
import { theme } from '../theme';
import backgroundImg from '../assets/mainpage/backgroundImg.svg';

export const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <ContentsContainer>
        <TitleContainer>
          <LogoImg src={logo} alt="로고" />
          <SubTitleContainer>
            <SubTitleHighlight>Quietly</SubTitleHighlight>
            <SubTitle>
              는 고민을 해소할 수 있는 고민 상담 서비스 입니다.
            </SubTitle>
          </SubTitleContainer>
        </TitleContainer>
        <StartBtn>시작하기</StartBtn>
      </ContentsContainer>
      <BackImg src={backgroundImg} alt="배경이미지" />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BackImg = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  right: -300px;
`;

const LogoImg = styled.img`
  width: 560px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

const StartBtn = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 35px;
  background-color: ${theme.color.main[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.white};
  cursor: pointer;
`;

const SubTitleContainer = styled.div`
  display: flex;
`;

const SubTitleHighlight = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.color.main[3]};
`;

const SubTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 170px;
  justify-content: center;
  margin: 80px 0 0 100px;
`;
