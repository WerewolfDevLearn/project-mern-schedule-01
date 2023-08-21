import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const LogOutBtn = styled.button`
  padding: 14px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  cursor: pointer;
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: 130px;
  display: flex;
  gap: 6px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.30);
  color: ${({ theme }) => theme.colors.white};
  background-color: #3e85f3;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media screen and (${themes.breakpoints.s}< width <= ${themes.breakpoints.m}) {
    bottom: 24px;
    left: 32px;
    width: 141px;
    font-size: 18px;
    line-height: 1.3;
    padding: 14px 22px;
    gap: 10px;
  }

  @media screen and (${themes.breakpoints.m}< width <= ${themes.breakpoints.l}) {
    bottom: 24px;
    left: 24px;
  }
`;
export const IconDiv = styled.div`
  display: block;
  width: 18px;
  height: 18px;
  & > * {
    height: 100%;
    width: 100%;
  }
  @media screen and (width > ${themes.breakpoints.s}) {
    width: 20px;
    height: 20px;
  }
`;
