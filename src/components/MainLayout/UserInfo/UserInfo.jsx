import PropTypes from 'prop-types';

import { UserInfoStyles } from './UserInfo.styled';

export default function UserInfo({ arg }) {
  return (
    <UserInfoStyles>
      <h2>UserInfo</h2>
      <p>{arg}</p>
    </UserInfoStyles>
  );
}

UserInfo.propTypes = {
  arg: PropTypes.any
};
