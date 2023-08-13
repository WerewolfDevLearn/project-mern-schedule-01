import PropTypes from 'prop-types';

import { SideBarBtnClose, IoCloseIcon } from './UserMenuBTNClose.styled';

export default function UserMenuBTNClose({ callBackCls }) {
  return (
    <SideBarBtnClose onClick={() => callBackCls()}>
      <IoCloseIcon />
    </SideBarBtnClose>
  );
}
UserMenuBTNClose.propTypes = {
  callBackCls: PropTypes.func.isRequired
};
