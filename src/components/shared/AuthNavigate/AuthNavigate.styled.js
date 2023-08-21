import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themes } from 'src/styles/variables/themes';

export const NavigateLink = styled(NavLink)`
  color: ${themes.colors.accent};
  text-shadow: ${themes.shadows.authHeading};
  font-size: ${themes.fontSizes.xs};
  font-style: normal;
  font-weight: ${themes.fontWeight.sb};
  line-height: 14px;
  text-decoration-line: underline;

  transition-property: color;
  transition-duration: ${themes.animations.duration};
  transition-timing-function: ${themes.animations.cubicBezier};

  &:hover,
  &:focus {
    color: ${themes.colors.hovered};
  }

  @media screen and (min-width: 768px) {
    font-size: ${themes.fontSizes.l};
  }
`;
