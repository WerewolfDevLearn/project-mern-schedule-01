import styled from 'styled-components';

import { themes } from 'src/styles/variables/themes';

export const LinkBtn = styled.a`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  border: 1px solid ${themes.colors.placegolderAuth};
  background: ${themes.colors.backgroundUserForm};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${themes.animations.duration};
  transition-timing-function: ${themes.animations.cubicBezier};

  color: ${themes.colors.black};
  font-family: Inter;
  font-size: ${themes.fontSizes.s};
  font-style: normal;
  font-weight: ${themes.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    padding: 13px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    border-color: ${themes.colors.textAndIconTodo};
  }
  &.disabled {
    background: ${themes.colors.black};
  }
`;
