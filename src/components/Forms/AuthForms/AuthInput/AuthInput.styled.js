import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

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

  &::placeholder {
    color: ${themes.colors.placegolderAuth};
  }

  &#login_password::placeholder {
    font-size: ${themes.fontSizes.xs};
    letter-spacing: 4px;
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
  /* ============== */
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
