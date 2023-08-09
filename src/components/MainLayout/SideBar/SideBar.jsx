import UserNav from './UserNav/UserNav';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import LogoutBtn from './LogoutBtn/LogoutBtn';

export default function SideBar() {
  return (
    <div>
      <SideBarLogo />
      <UserNav />
      <LogoutBtn />
    </div>
  );
}
