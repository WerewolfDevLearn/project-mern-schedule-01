import PropTypes from 'prop-types';

import 'simplebar-react/dist/simplebar.min.css';

import { Scrollbar } from './CustomHorizontalScrollbar.styled';

export default function CustomHorizontalScrollbar({ children }) {
  return <Scrollbar autoHide={false}>{children}</Scrollbar>;
}

CustomHorizontalScrollbar.propTypes = {
  children: PropTypes.any
};
