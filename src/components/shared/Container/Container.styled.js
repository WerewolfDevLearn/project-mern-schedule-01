import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  @media (min-width: ${themes.breakpoints.m}) {
    padding-inline: 32px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    max-width: 1440px;
    padding-inline: 128px;
  }
`;
