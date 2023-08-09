import PropTypes from 'prop-types';

import Item from './Item';

export default function ItemsList(items) {
  return (
    <ul>
      {items.map((item) => (
        <Item item={item} key={item.title} />
      ))}
    </ul>
  );
}

ItemsList.propTypes = {
  items: PropTypes.arrayOf({
    title: PropTypes.string.isRequired
  })
};
