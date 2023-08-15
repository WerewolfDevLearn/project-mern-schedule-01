import { useUser } from 'src/redux/selectors';
import Avatar from '@mui/material/Avatar';

import { UserInfoStyles, UserName } from './UserInfo.styled';

export default function UserInfo() {
  const { name } = useUser();
  return (
    <UserInfoStyles>
      <UserName>{name}</UserName>
      <Avatar alt="username" src="" sx={{ width: 32, height: 32 }}>
        {name.split('')[0]}
      </Avatar>
    </UserInfoStyles>
  );
}
