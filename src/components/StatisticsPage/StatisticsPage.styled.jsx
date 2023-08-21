import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const StatisticsPageStyles = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  border-radius: 16px;
  padding-top: 28px;
  padding-right: 14px;
  padding-bottom: 14px;
  /* padding-bottom: 135px; */
  padding-left: 14px;

  @media screen and (width >= ${themes.breakpoints.m}) {
    padding-top: 132px;
    padding-right: 33px;
    padding-bottom: 33px;
    padding-left: 33px;
  }
  @media screen and (width >= ${themes.breakpoints.l}) {
    padding-top: 134px;
    padding-right: 114px;
    /* padding-bottom: 104px; */
    padding-left: 114px;
  }
`;

export const StatisticsHeadWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (width >= 768px) {
    padding: 0 32px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Legend = styled.ul`
  /* margin-bottom: 45px; */

  display: flex;
  gap: 14px;

  color: ${({ theme }) => theme.colors.textCancelBtn};
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Ellipse = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: ${(props) => (props.type === 'day' ? '#FFD2DD' : '#3E85F3')};
`;

export const LegendText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
