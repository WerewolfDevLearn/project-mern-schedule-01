import PropTypes from 'prop-types';

import 'simplebar-react/dist/simplebar.min.css';

import { Scrollbar } from './CustomVerticalScrollbar.styled';

export default function CustomVerticalScrollbar({ children }) {
  return <Scrollbar autoHide={false}>{children}</Scrollbar>;
}

CustomVerticalScrollbar.propTypes = {
  children: PropTypes.any
};
