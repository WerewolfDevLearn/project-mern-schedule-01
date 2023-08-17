import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import UserNav from './UserNav/UserNav';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import LogoutBtn from './LogoutBtn/LogoutBtn';
import UserMenuBTNClose from './UserMenuBTNClose/UserMenuBTNClose';
import { SideBarContainer, SideBarHeading } from './SideBar.styled';

export default function SideBar({ open, callBackCls }) {
  const { t } = useTranslation();
  return (
    <SideBarContainer open={open}>
      <UserMenuBTNClose callBackCls={callBackCls} />
      <SideBarLogo />
      <SideBarHeading> {t('User Panel')}</SideBarHeading>
      <UserNav />
      <LogoutBtn />
    </SideBarContainer>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  callBackCls: PropTypes.func.isRequired
};
