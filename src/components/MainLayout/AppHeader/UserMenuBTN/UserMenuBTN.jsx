import PropTypes from 'prop-types';

import { UserMenuBTNOpen, IoOpenIcon } from './UserMenuBTN.styled';

export default function UserMenuBTN({ callBack }) {
  return (
    <UserMenuBTNOpen onClick={() => callBack()}>
      <IoOpenIcon />
    </UserMenuBTNOpen>
  );
}
UserMenuBTN.propTypes = {
  callBack: PropTypes.func.isRequired
};
