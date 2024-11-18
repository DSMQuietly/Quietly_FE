import styled from 'styled-components';
import { theme } from '../../theme';
import Logo from '../../assets/Logo.svg';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="logo" />
        <NavContainer>
          <NavContent>고민페이지</NavContent>
          <NavContent>마이페이지</NavContent>
          <LogBtn>로그인</LogBtn>
        </NavContainer>
      </HeaderContainer>
    </>
  );
};

const LogoImg = styled.img`
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 888px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.color.gray[3]};
  background-color: ${theme.color.white};
  width: 100vw;
  height: 64px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  cursor: pointer;
`;

const NavContent = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const LogBtn = styled.button`
  width: 120px;
  height: 44px;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 700;
  color: ${theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(
    to left,
    ${theme.color.main[3]},
    ${theme.color.main[1]}
  );
  &:active {
    outline: none;
    border: none;
  }
  &:hover {
    outline: none;
    border: none;
  }
`;
