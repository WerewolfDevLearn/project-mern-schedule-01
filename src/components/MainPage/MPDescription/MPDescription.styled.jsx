import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const DescriptionItem = styled.li``;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: ${themes.breakpoints.l}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

export const DescriptionWrapper = styled.div`
  @media (min-width: ${themes.breakpoints.l}) {
    margin-left: 77px;
  }
`;

export const DescriptionSidebar = styled.div`
  margin-left: auto;

  @media (min-width: ${themes.breakpoints.l}) {
    order: 1;
    margin-right: 77px;
  }
`;

export const Number = styled.p`
  margin-bottom: 14px;
  font-weight: ${themes.fontWeight.b};
  font-size: 80px;
  line-height: 100%;
  letter-spacing: -4px;
  color: ${themes.colors.accent};

  @media (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.number};
  }
`;

export const DescriptionTitle = styled.p`
  display: inline-block;
  padding: 8px 18px;
  margin-bottom: 8px;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.xxxl};
  line-height: 40px;
  text-transform: uppercase;
  color: ${themes.colors.accent};
  background-color: ${themes.colors.backgroundAuth};
  border-radius: 44px;

  @media (min-width: ${themes.breakpoints.m}) {
    padding: 6px 18px;
    font-size: ${themes.fontSizes.titleMain};
    line-height: 44px;
  }
`;

export const DescriptionSubtitle = styled.p`
  margin-bottom: 14px;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.xxxl};
  line-height: 40px;
  text-transform: uppercase;
  color: #171820;

  @media (min-width: ${themes.breakpoints.m}) {
    margin-bottom: 24px;
    font-size: ${themes.fontSizes.titleMain};
    line-height: 44px;

    text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
      0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  }
`;

export const DescriptionContent = styled.p`
  font-weight: ${themes.fontWeight.m};
  font-size: ${themes.fontSizes.s};
  line-height: 18px;

  color: rgba(17, 17, 17, 0.9);

  @media (min-width: ${themes.breakpoints.m}) {
    max-width: 275px;
  }
`;

export const DescriptionImg = styled.picture`
  margin: 0 auto;

  @media (min-width: ${themes.breakpoints.m}) {
    width: 100%;
    & img {
      width: 100%;
      max-width: 900px;
    }
  }
`;

export const DescriptionImgLeft = styled.picture`
  margin: 0 auto;

  @media (min-width: ${themes.breakpoints.m}) {
    width: 100%;
    & img {
      margin-left: auto;
      width: 100%;
      max-width: 900px;
    }
  }
`;
