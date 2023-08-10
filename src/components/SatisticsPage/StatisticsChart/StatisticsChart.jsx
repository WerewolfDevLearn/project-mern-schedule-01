import PropTypes from 'prop-types';

import { StatisticsChartStyles } from './StatisticsChart.styled';

export default function StatisticsChart({ arg }) {
  return (
    <StatisticsChartStyles>
      <h2>StatisticsChart</h2>
      <p>{arg}</p>
    </StatisticsChartStyles>
  );
}

StatisticsChart.propTypes = {
  arg: PropTypes.any
};
