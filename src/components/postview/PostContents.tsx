import styled from 'styled-components';
import { theme } from '../../theme';

interface isPost {
  children: string;
}

export const PostContents = ({ children }: isPost) => {
  return (
    <>
      <PostContainer>{children}</PostContainer>
    </>
  );
};

const PostContainer = styled.div`
  width: 1300px;
  padding: 40px 50px;
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 20px;
`;
