import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const DivWrapper = styled('div')`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-around;
    align-items: center;
  }
`;
export const TitleWrapper = styled.button`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    justify-content: space-around;
    align-items: center;
    margin-top: 33px;
    margin-bottom: 33px;
  }
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  border: none;
  margin-left: 8px;
`;
export const ButtonWrapper1 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: ${({ colorbtn }) =>
    colorbtn === 'white' ? themes.colors.white : 'transparent'};
  color: ${({ color }) => (color === 'blue' ? themes.colors.accent : themes.colors.white)};

  font-size: 20px;
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  cursor: pointer;
  &:hover {
    color: #565759;
`;
export const ButtonWrapper2 = styled('button')`
  height: 34px;
  width: 35px;
  background-color: ${({ colorbtn }) =>
    colorbtn === 'white' ? themes.colors.white : 'transparent'};
  color: ${({ color }) => (color === 'blue' ? themes.colors.accent : themes.colors.white)};
  font-size: 20px;
  color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  cursor: pointer;
  &:hover {
    color: #565759;
  }
`;
