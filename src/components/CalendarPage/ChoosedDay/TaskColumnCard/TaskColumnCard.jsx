import PropTypes from 'prop-types';

import { TemplatNameStyles } from './TemplatName.styled';

export default function TemplatName({ arg }) {
  return (
    <TemplatNameStyles>
      <h2>TemplatName</h2>
      <p>{arg}</p>
    </TemplatNameStyles>
  );
}

TemplatName.propTypes = {
  arg: PropTypes.any
};
