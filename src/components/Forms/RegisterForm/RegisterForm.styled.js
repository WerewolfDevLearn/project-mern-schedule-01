import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const Container = styled.div`
  display: flex;
  width: 100%;

  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: ${themes.colors.backgroundUserForm};

  @media screen and (min-width: ${themes.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    width: 480px;
    gap: 40px;
    padding: 40px 40px;
  }
`;

export const Title = styled.h1`
  color: ${themes.colors.accent};
  text-shadow: ${themes.shadows.authHeading};
  font-size: ${themes.fontSizes.l};
  font-weight: ${themes.fontWeight.sb};
  line-height: 24px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.xxl};
  }
`;

export const FormElement = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    gap: 48px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    gap: 18px;
  }
`;

export const Subtitle = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: ${themes.colors.textAndIconTodo};
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.sb};
  line-height: normal;

  &.input-error {
    color: ${themes.colors.failed};
    font-weight: ${themes.fontWeight.r};
  }

  &.input-correct {
    color: ${themes.colors.saccess};
    font-weight: ${themes.fontWeight.r};
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.s};
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 14px;
  padding-right: 44px;

  border-radius: 8px;
  border: 1px solid ${themes.colors.placegolderAuth};
  background: ${themes.colors.backgroundUserForm};

  color: ${themes.colors.textAndIconTodo};
  font-size: ${themes.fontSizes.s};
  font-weight: ${themes.fontWeight.r};
  line-height: 18px;

  &:hover,
  &:focus {
    border: 1px solid ${themes.colors.textAndIconTodo};
  }

  &.input-error {
    border: 1px solid ${themes.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${themes.colors.saccess};
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    padding: 18px;
    font-size: ${themes.fontSizes.l};
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #da1414;
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.s};
    left: 18px;
  }
`;

export const TextCorrect = styled.p`
  color: ${themes.colors.saccess};
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.s};
    left: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  background: ${themes.colors.accent};
  box-shadow: ${themes.shadows.authButton};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${themes.animations.duration};
  transition-timing-function: ${themes.animations.cubicBezier};

  color: ${themes.colors.white};
  font-size: ${themes.fontSizes.s};
  font-weight: ${themes.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  display: inline;
  width: 18px;
  stroke: red;
  fill: red;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    width: 20px;
  }
`;

export const SvgValidate = styled.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    bottom: 18px;
  }
`;

export const SvgEye = styled.img`
  position: absolute;
  right: 46px;
  bottom: 11px;
  width: 24px;
  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    bottom: 18px;
  }
`;
