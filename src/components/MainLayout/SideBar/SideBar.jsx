import PropTypes from 'prop-types';

import UserNav from './UserNav/UserNav';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import UserMenuBTNClose from './UserMenuBTNClose/UserMenuBTNClose';
import { SideBarContainer } from './SideBar.styled';

export default function SideBar({ open, callBackCls }) {
  return (
    <SideBarContainer open={open}>
      <UserMenuBTNClose callBackCls={callBackCls} />
      <SideBarLogo />
      <h3>User Panel</h3>
      <UserNav />
      <LogoutBtn />
    </SideBarContainer>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  callBackCls: PropTypes.func.isRequired
};