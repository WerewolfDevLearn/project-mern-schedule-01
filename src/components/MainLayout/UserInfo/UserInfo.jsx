import { useUser } from 'src/redux/selectors';
import Avatar from '@mui/material/Avatar';

import { UserInfoStyles, UserName } from './UserInfo.styled';

export default function UserInfo() {
  const { name, avatarUrl } = useUser();

  const screenWidthIsMobile = window.innerWidth < 768;

  return (
    <UserInfoStyles>
      <UserName>
        {screenWidthIsMobile && name.length > 7 ? `${name.slice(0, 3)}...` : name.split(' ')[0]}
      </UserName>
      {avatarUrl ? (
        <Avatar
          alt="username"
          src={avatarUrl}
          sx={{ width: 32, height: 32, border: '1.8px solid #3E85F3' }}
        />
      ) : (
        <Avatar alt="username" src="" sx={{ width: 32, height: 32 }}>
          {name.split('')[0]}
        </Avatar>
      )}
    </UserInfoStyles>
  );
}
