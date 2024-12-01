import styled from 'styled-components';
import { theme } from '../../theme';

export const CommentContainer = () => {
  return (
    <>
      <PostContainer placeholder="댓글을 입력하세요" />
    </>
  );
};

const PostContainer = styled.textarea`
  font-size: 16px;
  width: 1370px;
  height: 128px;
  padding: 26px 0 26px 30px;
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 8px;
`;
