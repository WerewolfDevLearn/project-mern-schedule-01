import Avatar from '@mui/material/Avatar';

import { UserInfoStyles, UserName } from './UserInfo.styled';

export default function UserInfo() {
  return (
    <UserInfoStyles>
      <UserName>Madia</UserName>
      <Avatar alt="username" src="" sx={{ width: 32, height: 32 }} />
    </UserInfoStyles>
  );
}
