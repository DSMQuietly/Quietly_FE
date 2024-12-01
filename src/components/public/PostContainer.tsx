import styled from 'styled-components';
import { theme } from '../../theme';
import { KeyWordBtn } from './KeyWordBtn';

export const PostContainer = () => {
  return (
    <Container>
      <ContentContainer>
        <KeyWordBtn children="친구" />
        <Title>친구랑 싸웠어요ㅠㅠ</Title>
        <Line />
        <TextContent>
          요즘 들어 친구랑 뭔가 자꾸 서로 다투는 일이 많았어요. 조금만 틀어지면
          서로 이해하려고 하지 않고, 싸움만 커지는 느낌이었어요. 나도 왜
          그랬는지 잘 모르겠지만, 그 순간엔 마음이 너무 아프고, 화가 나서 말도
          제대로 못했어요. 싸운 후로 서로 연락도 안 하고, 갑자기 마음이
          공허해져서 괜히 기분이 울적해졌어요. 내가 잘못한 건지, 아니면 친구가
          나를 이해하지 못한 건지 헷갈리기만 하고. 그래도 이런 마음을 가진 채로
          그냥 시간이 지나가게 두고 싶지 않아요. 다시 서로 얘기하고 싶어서
          어떻게 풀어야 할지 고민 중이에요.
        </TextContent>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  width: 1100px;
  height: 260px;
  border: 1px solid ${theme.color.gray[2]};
  border-radius: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const Line = styled.hr`
  width: 1000px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;

const TextContent = styled.div`
  font-size: 12px;
  font-weight: 500;
  width: 1000px;
`;
