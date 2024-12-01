import styled from 'styled-components';
import { theme } from '../../theme';
import { useState } from 'react';

export const NavBar = () => {
  const [isVar, setIsVar] = useState<string>('friend');

  const handleClick = (buttonValue: string) => {
    setIsVar(buttonValue);
  };
  return (
    <NavContainer>
      <NavContents>
        <NavContent
          onClick={() => handleClick('friend')}
          selected={isVar === 'friend'}
        >
          친구
        </NavContent>
        <SubLine />
        <NavContent
          onClick={() => handleClick('family')}
          selected={isVar === 'family'}
        >
          가족
        </NavContent>
        <SubLine />
        <NavContent
          onClick={() => handleClick('study')}
          selected={isVar === 'study'}
        >
          학업
        </NavContent>
        <SubLine />
        <NavContent
          onClick={() => handleClick('love')}
          selected={isVar === 'love'}
        >
          연애
        </NavContent>
        <SubLine />
        <NavContent
          onClick={() => handleClick('etc')}
          selected={isVar === 'etc'}
        >
          기타{' '}
        </NavContent>
      </NavContents>
      <Line />
    </NavContainer>
  );
};

const NavContents = styled.div`
  display: flex;
  gap: 33px;
  align-items: center;
  margin-left: 5px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const SubLine = styled.hr`
  width: 1px;
  height: 14px;
  border: none;
  background-color: ${theme.color.gray[2]};
`;

const Line = styled.hr`
  height: 1px;
  border: none;
  width: 1200px;
  background-color: ${theme.color.gray[2]};
`;

const NavContent = styled.div<{ selected: boolean }>`
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? 700 : 400)};
  color: ${(props) =>
    props.selected ? theme.color.main[4] : theme.color.gray[2]};
  cursor: pointer;
`;
