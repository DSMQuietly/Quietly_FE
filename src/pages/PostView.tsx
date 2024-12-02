import styled from 'styled-components';
import { CommentContainer } from '../components/postview/CommentContainer';
import { PostContents } from '../components/postview/PostContents';
import { Header } from '../components/public/Header';
import { KeyWordBtn } from '../components/public/KeyWordBtn';
import { PublicBtn } from '../components/public/PublicBtn';
import { Comment } from '../components/postview/Comment';
import { theme } from '../theme';

export const PostView = () => {
  return (
    <>
      <>
        <Header />
        <PostContentsContainer>
          <ContentsContainer>
            <TitleContainer>
              <Title>친구랑 싸웠어요ㅠㅠ</Title>
              <TitleLine />
            </TitleContainer>
            <KeyWordBtn children="친구" />
            <PostContents
              children="요즘 들어 친구랑 자꾸 부딪히게 돼서 정말 힘들어요. 사실, 이렇게 싸울 일이 아니었는데도 서로 조금씩 오해가 쌓이고, 결국 큰 싸움으로 번지고 말았어요. 그때 당시에는 내 감정이 너무 복잡해서 차라리 싸우는 게 낫다고 생각했어요. 아무리 생각해도 내 마음속에서 내가 느끼는 불편함이나 불안함이 확실히 있었고, 그게 화로 표현되었죠. 그 순간엔 내가 무슨 말을 했는지도 잘 모르겠어요. 그냥 그때 그 상황에서 내 감정을 전하고 싶었을 뿐인데, 그 말들이 친구에게 상처가 됐다는 걸 나중에 알게 됐어요.
친구와 싸운 후엔 시간이 지나도 마음이 계속 무겁고, 아프더라고요. 싸우고 나서도 그냥 둘 사이가 멀어지면 어떡하지?라는 불안한 생각이 계속 떠올라서 잠도 잘 안 오고, 하루하루가 너무 힘들었어요. 그리고 내가 그 상황을 어떻게 풀어야 할지, 어떻게 말해야 할지 몰라서 그냥 아무것도 하지 않고 시간을 보냈어요. 친구가 먼저 연락을 하기를 기다렸지만, 시간이 지날수록 그럴 가능성은 점점 줄어들 것 같았고, 그게 더 두려워졌어요.
근데 사실 내가 한 말들도 제대로 생각해보면 친구를 이해하려고 한 게 아니라 그냥 내 감정만 내세운 것 같아요. 친구의 입장에서 생각해보면 얼마나 속상했을까 싶고, 그럴 때마다 마음이 아파요. 내가 조금 더 차분하게 말을 꺼냈다면 어땠을까, 조금 더 서로의 입장에서 이해하려고 했다면 싸우지 않았을까 하는 후회가 밀려옵니다. 왜 이렇게 됐을까, 이렇게까지 싸워야 했을까, 라는 생각을 하면서 나도 참 어리석었다고 느껴요.
지금은 친구가 어떤 마음인지 전혀 알 수 없고, 나도 뭘 해야 할지 모르겠어요. 그래도 하나 확실한 건, 내가 친구와 다시 얘기하고 싶은 마음이 있다는 거예요. 싸운 후에 이렇게 마음이 아픈 게, 그만큼 내가 친구를 소중하게 생각한다는 증거니까요. 그냥 이대로 시간이 지나버리면 아무것도 해결되지 않을 거라는 걸 알지만, 어떻게 시작해야 할지 막막해요. 친구가 내 마음을 받아줄 수 있을지, 내가 다가가면 어떻게 반응할지 걱정이 돼요.
그래도 어쩌면 친구도 나와 같은 마음일지도 모른다고 생각해요. 사실, 우리가 싸운 이유가 서로 오해에서 비롯된 작은 일들일 수 있잖아요. 그게 시간이 지나면서 점점 커지면서 둘 다 제대로 표현하지 못한 감정들로 가득 차게 된 것 같아요. 나는 이제 조금 더 마음을 열고, 친구에게 먼저 다가가려고 해요. 마음이 많이 아프지만, 그만큼 회복하고 싶은 마음이 더 커서, 나도 내 감정을 솔직하게 말하고 싶어요.
요즘 들어 친구랑 자꾸 부딪히게 돼서 정말 힘들어요. 사실, 이렇게 싸울 일이 아니었는데도 서로 조금씩 오해가 쌓이고, 결국 큰 싸움으로 번지고 말았어요. 그때 당시에는 내 감정이 너무 복잡해서 차라리 싸우는 게 낫다고 생각했어요. 아무리 생각해도 내 마음속에서 내가 느끼는 불편함이나 불안함이 확실히 있었고, 그게 화로 표현되었죠. 그 순간엔 내가 무슨 말을 했는지도 잘 모르겠어요. 그냥 그때 그 상황에서 내 감정을 전하고 싶었을 뿐인데, 그 말들이 친구에게 상처가 됐다는 걸 나중에 알게 됐어요.
친구와 싸운 후엔 시간이 지나도 마음이 계속 무겁고, 아프더라고요. 싸우고 나서도 그냥 둘 사이가 멀어지면 어떡하지?라는 불안한 생각이 계속 떠올라서 잠도 잘 안 오고, 하루하루가 너무 힘들었어요. 그리고 내가 그 상황을 어떻게 풀어야 할지, 어떻게 말해야 할지 몰라서 그냥 아무것도 하지 않고 시간을 보냈어요. 친구가 먼저 연락을 하기를 기다렸지만, 시간이 지날수록 그럴 가능성은 점점 줄어들 것 같았고, 그게 더 두려워졌어요.
근데 사실 내가 한 말들도 제대로 생각해보면 친구를 이해하려고 한 게 아니라 그냥 내 감정만 내세운 것 같아요. 친구의 입장에서 생각해보면 얼마나 속상했을까 싶고, 그럴 때마다 마음이 아파요. 내가 조금 더 차분하게 말을 꺼냈다면 어땠을까, 조금 더 서로의 입장에서 이해하려고 했다면 싸우지 않았을까 하는 후회가 밀려옵니다. 왜 이렇게 됐을까, 이렇게까지 싸워야 했을까, 라는 생각을 하면서 나도 참 어리석었다고 느껴요.
지금은 친구가 어떤 마음인지 전혀 알 수 없고, 나도 뭘 해야 할지 모르겠어요. 그래도 하나 확실한 건, 내가 친구와 다시 얘기하고 싶은 마음이 있다는 거예요. 싸운 후에 이렇게 마음이 아픈 게, 그만큼 내가 친구를 소중하게 생각한다는 증거니까요. 그냥 이대로 시간이 지나버리면 아무것도 해결되지 않을 거라는 걸 알지만, 어떻게 시작해야 할지 막막해요. 친구가 내 마음을 받아줄 수 있을지, 내가 다가가면 어떻게 반응할지 걱정이 돼요.
그래도 어쩌면 친구도 나와 같은 마음일지도 모른다고 생각해요. 사실, 우리가 싸운 이유가 서로 오해에서 비롯된 작은 일들일 수 있잖아요. 그게 시간이 지나면서 점점 커지면서 둘 다 제대로 표현하지 못한 감정들로 가득 차게 된 것 같아요. 나는 이제 조금 더 마음을 열고, 친구에게 먼저 다가가려고 해요. 마음이 많이 아프지만, 그만큼 회복하고 싶은 마음이 더 커서, 나도 내 내 마음을 받아줄 수 있을지, 내가 다가가면 어떻게 반응할지 걱정이 돼요.
그래도 어쩌면 친구도 나와 같은 마음일지도 모른다고 생각해요. 사실, 우리가 싸운 이유가 서로 오해에서 비롯된 작은 일들일 수 있잖아요. 그게 시간이 지나면서 점점 커지면서 둘 다 제대로 표현하지 못한 감정들로 가득 차게 된 것 같아요. 나는 이제 조금 더 마음을 열고, 친구에게 먼저 다가가려고 해요. 마음이 많이 아프지만, 그만큼 회복하고 싶은 마음이 더 커서, 나도 내 감정을 솔직하게 말하고 싶어요.감정을 솔직하게 말하고 싶어요."
            />
          </ContentsContainer>
          <CommentContents>
            <CommentContainer />
            <PublicBtn children="댓글작성" />
          </CommentContents>
          <CommentAll>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </CommentAll>
        </PostContentsContainer>
      </>
    </>
  );
};

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const CommentAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const CommentContents = styled.div`
  gap: 44px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ContentsContainer = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 35px;
`;

const PostContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
  gap: 100px;
`;

const TitleLine = styled.line`
  width: 500px;
  height: 1px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;
