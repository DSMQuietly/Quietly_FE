import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import Logo from '../../assets/Logo.svg';
import { useState } from 'react';
import { Login } from '../../pages';
import { useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const mypageNavClick = () => {
    navigate('/mypage');
  };

  const postNavClick = () => {
    navigate('/postcheck');
  };

  const logoClick = () => {
    navigate('/postcheck');
    window.location.reload();
  };

  const loginOpenClick = () => {
    setIsLogin(true);
  };

  const loginCloseClick = () => {
    setIsLogin(false);
  };

  return (
    <>
      <HeaderContainer>
        <LogoImg src={Logo} alt="logo" onClick={logoClick} />
        <NavContainer>
          <PostNav pathname={pathname} onClick={postNavClick}>
            고민페이지
          </PostNav>
          <MypageNav pathname={pathname} onClick={mypageNavClick}>
            마이페이지
          </MypageNav>
          <LogBtn onClick={loginOpenClick}>로그인</LogBtn>
        </NavContainer>
      </HeaderContainer>
      {isLogin && (
        <ModalContainer>
          <Login loginProp={loginCloseClick} />
        </ModalContainer>
      )}
    </>
  );
};
const PostNav = styled.div<{ pathname?: string }>`
  font-size: 16px;

  cursor: pointer;
  ${({ pathname = '' }) => {
    return pathname.includes('post')
      ? css`
          color: ${theme.color.main[3]};
          font-weight: 700;
        `
      : css`
          color: ${theme.color.gray[1]};
          font-weight: 500;
        `;
  }};
`;

const MypageNav = styled.div<{ pathname?: string }>`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  ${({ pathname = '' }) => {
    return pathname.includes('mypage')
      ? css`
          color: ${theme.color.main[3]};
          font-weight: 700;
        `
      : css`
          color: ${theme.color.gray[1]};
          font-weight: 500;
        `;
  }};
`;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
`;

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
