import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padEnd(7, '0');
}

export const Wrapper = styled.section`
  margin: 0 auto;
  padding-inline: 20px;
  max-width: 375px;

  @media (min-width: ${themes.breakpoints.m}) {
    padding-inline: 94px;
    max-width: 768px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    padding-inline: 128px;
    max-width: 1440px;
  }
`;

export const ReviewsTitle = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  font-weight: ${themes.fontWeight.b};
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${themes.colors.accent};
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;

  @media (min-width: ${themes.breakpoints.m}) {
    margin-bottom: 18px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const ReviewsItem = styled.div`
  box-sizing: border-box;
  padding: 24px;
  max-width: 335px;
  height: 194px;

  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  background-attachment: fixed;
  background-size: contain;

  @media (min-width: ${themes.breakpoints.m}) {
    padding: 32px 32px 50px;
    max-width: 580px;
    height: 187px;
  }
`;

export const UserTop = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;

  @media (min-width: ${themes.breakpoints.m}) {
    margin-bottom: 18px;
  }
`;

export const UserTopRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const UserPhoto = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: ${getRandomHexColor};
`;

export const UserTitle = styled.h4`
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.l};
  line-height: 18px;
  color: ${themes.colors.black};
`;

export const UserRating = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserReview = styled.p`
  margin: 0;
  padding: 0;
  font-weight: ${themes.fontWeight.m};
  font-size: ${themes.fontSizes.s};
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);

  @media (min-width: ${themes.breakpoints.m}) {
    margin-left: 68px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

export const SwiperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 61px;
  height: 48px;
  cursor: pointer;
  transition: box-shadow 250ms ${themes.animations.cubicBezier},
    transform 250ms ${themes.animations.cubicBezier};

  &:active {
    transform: scale(0.8);
  }
`;
