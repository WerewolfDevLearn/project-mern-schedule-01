import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 14px;
  top: -31px;

  @media screen and (${themes.breakpoints.m} <= width) {
    top: 0;
  }
`;

export const AvatarAddIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 85%;
  left: 60%;
  color: white;
  background-color: #3e85f3;
  border-radius: 50%;
  z-index: 1;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #2b78ef;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 24px;
    height: 24px;
  }
`;

export const AvatarInputField = styled.input`
  display: none;
`;

export const AvatarImg = styled.img`
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  object-fit: cover;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 124px;
    height: 124px;
  }
`;
