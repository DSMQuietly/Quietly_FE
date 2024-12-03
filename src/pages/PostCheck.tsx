import styled from 'styled-components';
import { NavBar } from '../components/postCheck/NavBar';
import { Header } from '../components/public/Header';
import { PostContainer } from '../components/public/PostContainer';
import { PublicBtn } from '../components/public/PublicBtn';
import { useNavigate } from 'react-router-dom';

export const PostCheck = () => {
  const navigate = useNavigate();

  const writeClick = () => {
    navigate('/writing');
  };

  return (
    <>
      <PostCheckContainer>
        <Header />
        <NavBar />
        <PostAll>
          <PostContainer />
          <PostContainer />
          <PostContainer />
        </PostAll>
        <BtnContainer>
          <PublicBtn children="작성하기" onClick={writeClick} />
        </BtnContainer>
      </PostCheckContainer>
    </>
  );
};
const BtnContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 140px;
`;

const PostCheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin-bottom: 100px;
`;

const PostAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
`;
