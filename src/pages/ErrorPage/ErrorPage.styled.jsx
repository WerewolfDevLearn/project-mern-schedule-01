import styled from 'styled-components';

import { backgroundColor, colorText } from 'src/styles/variables/Variables';

export const ErrorPageStyles = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.background};
`;

export const ErrorCode = styled.h1`
  position: relative;

  margin-bottom: 28px;

  display: flex;
  gap: 60px;

  color: ${colorText.blue1};

  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 150px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 250px;
    gap: 110px;
  }
`;

export const IconWrapper = styled.span`
  picture {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);

    @media screen and (min-width: 768px) {
    }
  }
`;

export const Text = styled.p`
  width: 281px;
  margin-bottom: 24px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.borderInputUserForm};
  
  @media screen and (min-width: 768px) {
    width: 387px;
  }
`;

export const HomeBtn = styled.button`
  padding: 14px 32px;
  border-radius: 16px;

  color: ${colorText.white};
  background-color: ${backgroundColor.primaryBlue};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
  }
`;
