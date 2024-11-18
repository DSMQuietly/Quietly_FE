import styled from 'styled-components';
import { CheckBtn } from '../components/CheckBtn';
import { ContentsInput } from '../components/Inputs/ContentsInput';
import { TitleInput } from '../components/Inputs/TitleInput';
import { Header } from '../components/public/Header';
import { PublicBtn } from '../components/public/PublicBtn';
import { useState } from 'react';

export const Writing = () => {
  const [isCheck, setIsCheck] = useState<string>('friend');

  const handleClick = (buttonValue: string) => {
    setIsCheck(buttonValue);
  };

  return (
    <WritingContainer>
      <Header />
      <Contents>
        <TitleInput />
        <BtnContainer>
          <CheckBtn
            children="친구"
            onClick={() => handleClick('friend')}
            selected={isCheck === 'friend'}
          ></CheckBtn>
          <CheckBtn
            children="가족"
            onClick={() => handleClick('family')}
            selected={isCheck === 'family'}
          ></CheckBtn>
          <CheckBtn
            children="학업"
            onClick={() => handleClick('study')}
            selected={isCheck === 'study'}
          ></CheckBtn>
          <CheckBtn
            children="연애"
            onClick={() => handleClick('love')}
            selected={isCheck === 'love'}
          ></CheckBtn>
          <CheckBtn
            children="기타"
            onClick={() => handleClick('etc')}
            selected={isCheck === 'etc'}
          ></CheckBtn>
        </BtnContainer>
        <ContentsInput />
        <PublicBtn children="올리기"></PublicBtn>
      </Contents>
    </WritingContainer>
  );
};
const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-bottom: 80px;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
