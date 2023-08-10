import PropTypes from 'prop-types';

import { ThemeTogglerStyles } from './ThemeToggler.styled';

export default function ThemeToggler({ arg }) {
  return (
    <ThemeTogglerStyles>
      <h2>ThemeToggler</h2>
      <p>{arg}</p>
    </ThemeTogglerStyles>
  );
}

ThemeToggler.propTypes = {
  arg: PropTypes.any
};
