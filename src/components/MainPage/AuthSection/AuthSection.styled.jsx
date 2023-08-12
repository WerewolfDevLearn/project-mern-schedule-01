import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { device } from '../../../styles/variables/mediaVeriables';
import { themes } from '../../../styles/variables/themes';

export const StyledHero = styled.header`
  position: relative;
  background-color: #3e85f3;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`
  color: #ffffff;

  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: 44px;
  line-height: 1.09;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const HeroTitleSpan = styled.span`
  font-family: 'Coolvetica';
  font-style: italic;
  font-size: 44px;
  line-height: 1.09;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 768px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const StyledImg = styled.picture`
  width: 142px;
  display: block;

  @media (min-width: 768px) {
    width: 150px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding-bottom: 30px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const AuthLink = styled(NavLink)`
  padding: 14px 32px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.02em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: #3e85f3;
  background-color: ${themes.colors.white};
  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    font-size: 14px;
    line-height: 1.3;
    padding: 14px 22px;
  }
`;
