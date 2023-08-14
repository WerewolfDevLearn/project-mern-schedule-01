import styled from 'styled-components';
import { FaRegArrowAltCircleUp } from 'react-icons/fa';

import { themes } from 'src/styles/variables/themes';

export const TopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 15px;
  color: #abcdef;
  box-shadow: inset 0 0 0 4px #abcdef;
  transition: 250ms;
  z-index: 999;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${themes.colors.accent};
  }

  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  @media screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
`;

export const ToTopBtn = styled(FaRegArrowAltCircleUp)`
  position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 40px;

    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
    @media screen and (min-width: 768px) {
      font-size: 35px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 40px;
    }

`;
