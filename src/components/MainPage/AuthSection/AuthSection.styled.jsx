import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themes } from 'src/styles/variables/themes';

import { device } from '../../../styles/variables/mediaVeriables';
import { themes } from '../../../styles/variables/themes';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-block: 64px;

  @media (min-width: ${themes.breakpoints.m}) {
    padding-block: 64px 100px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    padding-block: 64px 118px;
  }
`;

export const StyledHero = styled.header`
  position: relative;

  background-color: ${themes.colors.accent};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroTitle = styled.h1`

  color: ${themes.colors.white};
  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: ${themes.fontSizes.logoMobile};
  line-height: 1.09;
  font-weight: ${themes.fontWeight.r};
  text-shadow: ${themes.shadows.authHeading};

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: ${themes.fontSizes.logo};
    line-height: 1.25;
  }
`;

export const HeroTitleSpan = styled.span`
  font-family: 'Coolvetica';
  font-style: italic;
  font-size: ${themes.fontSizes.logoMobile};
  line-height: 1.09;
  font-weight: ${themes.fontWeight.r};
  text-shadow: ${themes.shadows.authHeading};

  @media (min-width: 768px) {
    font-size: ${themes.fontSizes.logo};
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
  font-size: ${({ colorbtn }) =>
    colorbtn === 'white' ? themes.fontSizes.s : themes.fontSizes.xs};
  line-height: 1.3;
  letter-spacing: -0.02em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: ${({ colorbtn }) => colorbtn !== 'white' && 'underline'};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  color: ${({ color }) =>
    color === 'blue' ? themes.colors.accent : themes.colors.white};
  background-color: ${({ colorbtn }) => colorbtn === 'white' ? themes.colors.white : 'transparent'};

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
  @media ${device.tablet} {
    font-size: ${({ colorbtn }) =>
    colorbtn === 'white' ? themes.fontSizes.s : themes.fontSizes.l};
    line-height: 1.3;
    padding: 14px 22px;
  }
`;
