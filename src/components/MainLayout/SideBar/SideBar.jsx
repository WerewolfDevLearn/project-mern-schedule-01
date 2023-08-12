import UserNav from './UserNav/UserNav';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import LogoutBtn from './LogoutBtn/LogoutBtn';

import { SideBarContainer } from './SideBar.styled';

export default function SideBar() {
  return (
    <SideBarContainer>
      <h3>User Panel</h3>
      <SideBarLogo />
      <UserNav />
      <LogoutBtn />
    </SideBarContainer>
  );
}
