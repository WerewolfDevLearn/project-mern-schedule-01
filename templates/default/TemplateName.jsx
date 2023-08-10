import PropTypes from 'prop-types';

import { TemplateNameStyles } from './TemplateName.styled';

export default function TemplateName({ arg }) {
  return (
    <TemplateNameStyles>
      <h2>TemplateName</h2>
      <p>{arg}</p>
    </TemplateNameStyles>
  );
}

TemplateName.propTypes = {
  arg: PropTypes.any
};
