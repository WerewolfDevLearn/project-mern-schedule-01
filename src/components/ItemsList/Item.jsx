import PropTypes from 'prop-types';

export default function Item({ item }) {
  return (
    <li>
      <h3>{item.title}</h3>
    </li>
  );
}

Item.propTypes = {
  item: PropTypes.exact({
    title: PropTypes.string.isRequired
  })
};
