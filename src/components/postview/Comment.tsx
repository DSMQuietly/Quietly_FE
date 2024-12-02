import styled from 'styled-components';
import { theme } from '../../theme';
import profileImg from '../../assets/profileImg.svg';
import replyAdd from '../../assets/replyAdd.svg';

export const Comment = () => {
  return (
    <AllContainer>
      <ProfileContainer>
        <Profile></Profile>
        <CommentContainer>
          <NameContainer>
            <Name>익명이</Name>
            <Time>1분전</Time>
          </NameContainer>
          <CommentContent>힘내세용ㅇ~~!!</CommentContent>
          <ReplyContainer>
            <Reply>답글달기</Reply>
            <ReplyImg src={replyAdd} alt="reply" />
          </ReplyContainer>
        </CommentContainer>
      </ProfileContainer>
      <BtnContainer>
        <EditBtn>수정</EditBtn>
        <DelBtn>삭제</DelBtn>
      </BtnContainer>
    </AllContainer>
  );
};

const ReplyImg = styled.img`
  cursor: pointer;
`;

const AllContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1350px;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: start;
  justify-content: start;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: start;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: start;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 33px;
`;

const ReplyContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Profile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border: 1px solid ${theme.color.gray[2]};
  background-image: url(${profileImg});
  background-repeat: no-repeat;
  background-position: center;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Time = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${theme.color.gray[3]};
`;

const CommentContent = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const EditBtn = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.color.gray[2]};
`;

const DelBtn = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.color.gray[2]};
`;

const Reply = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.color.main[3]};
  cursor: pointer;
`;
