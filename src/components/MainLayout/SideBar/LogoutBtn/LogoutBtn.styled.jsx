import styled from 'styled-components';

import { device } from '../../../../styles/variables/mediaVeriables';

export const LogOutBtn = styled.button`
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
  background-color: white;
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
