import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import closeEyes from '../../assets/closeEyes.svg';
import openEyes from '../../assets/openEyes.svg';

interface isInput {
  placeholder: string;
  isType: boolean;
  setIsType: (value: boolean) => void;
  label: string;
}

export const Inputs = ({ placeholder, isType, setIsType, label }: isInput) => {
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const inputClick = () => {
    setIsPassword(!isPassword);
  };

  return (
    <InputAllContainer>
      <Label>{label}</Label>
      <InputFakeContainer>
        <InputContainer
          type={isPassword ? 'password' : 'text'}
          placeholder={placeholder}
        />
        {isPassword ? (
          <ImgContainer src={closeEyes} alt="close" onClick={inputClick} />
        ) : (
          <ImgContainer src={openEyes} alt="open" onClick={inputClick} />
        )}
      </InputFakeContainer>
    </InputAllContainer>
  );
};

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
`;

const InputAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  align-items: start;
  justify-content: center;
`;

const InputFakeContainer = styled.div`
  position: relative;
  width: 364px;
  height: 42px;
`;

const ImgContainer = styled.img`
  position: absolute;
  right: 16px;
  top: 14px;
`;

const InputContainer = styled.input`
  outline-color: ${theme.color.main[3]};
  width: 328px;
  height: 40px;
  padding: 0 17px;
  border: solid 1px ${theme.color.gray[4]};
  border-radius: 10px;
  &::placeholder {
    color: ${theme.color.gray[4]};
  }
`;
