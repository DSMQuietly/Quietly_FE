import { Header } from '../components/public/Header';
import { theme } from '../theme';
import mypageProfile from '../assets/mypageProfile.svg';
import styled from 'styled-components';

export const Mypage = () => {
  return (
    <>
      <>
        <Header />
        <MypageContainer>
          <ProfileContents>
            <Profile />
            <ProfileSubContents>
              <NameContainer>
                <Name>박지연</Name>
                <NameLine />
              </NameContainer>
              <WorriedContainer>
                <WorriedTitle>내가 올린 고민 수</WorriedTitle>
                <WorriedCount>-</WorriedCount>
              </WorriedContainer>
            </ProfileSubContents>
          </ProfileContents>
          <SideLine />
          <TitleContainer>
            <Title>내가 작성한 고민</Title>
            <TitleLine />
          </TitleContainer>
        </MypageContainer>
      </>
    </>
  );
};

const MypageContainer = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  margin: 80px 0 80px 0;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ProfileSubContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Profile = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 1px solid ${theme.color.gray[4]};
  background-image: url(${mypageProfile});
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const NameLine = styled.line`
  width: 250px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
`;

const WorriedCount = styled.div`
  font-size: 16px;
`;

const WorriedTitle = styled.div`
  font-size: 16px;
`;
const WorriedContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SideLine = styled.line`
  width: 1px;
  height: 900px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${theme.color.main[3]};
`;

const TitleLine = styled.line`
  width: 1000px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;
