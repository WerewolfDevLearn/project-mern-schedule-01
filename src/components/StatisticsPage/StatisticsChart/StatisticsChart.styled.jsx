import styled from 'styled-components';

// export const StatisticsChartStyles = styled.div``;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 1087px;
    height: 752px;
  }
`;

export const ChartContainer = styled.div`
  width: 860px;
  height: 440px;
  border-radius: 20px;
  margin: 0 auto; /* Додаємо автоматичний відступ по боках для вирівнювання по центру */

  border: 0.8px solid ${({ theme }) => theme.colors.ligthBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 100%;
    /* height: auto; */
  }
`;

export const StatisticsChartStyles = styled.div`
  margin-top: 78px;
  fill: ${({ theme }) => theme.colors.textCancelBtn};
`;

export const LegendStyles = styled.ul`
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

  background: ${(props) => (props.type === 'By Day' ? '#FFD2DD' : '#3E85F3')};
`;
