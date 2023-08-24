import { useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/redux/selectors';
import { Plus } from 'src/components/shared/Icons';

import { SUPPORTED_FORMATS } from '../accountValidationRules';

import {
  AvatarAddIcon,
  AvatarContainer,
  AvatarInputField,
  AvatarImg
} from './AccountAvatar.styled';

export default function AccountAvatar({
  selectedAvatar,
  formik,
  setSelectedAvatar,
  setImagePreview
}) {
  const user = useUser();
  const fileInputRef = useRef(null);

  const handleAddImageClick = () => fileInputRef.current.click();

  return (
    <AvatarContainer>
      <AvatarAddIcon>
        <Plus width="18px" height="18px" onClick={handleAddImageClick} />
      </AvatarAddIcon>
      <label>
        <AvatarInputField
          type="file"
          name="avatar"
          accept="image/*"
          ref={fileInputRef}
          onBlur={() => formik.setTouched({ avatar: true })}
          onChange={(e) => {
            const avatar = e.target.files[0];

            if (avatar && SUPPORTED_FORMATS.includes(avatar.type)) {
              formik.setFieldValue('avatar', avatar);
              setSelectedAvatar(URL.createObjectURL(avatar));
              setImagePreview('');
            }
          }}
        />

        {selectedAvatar ? (
          <div>
            <AvatarImg src={selectedAvatar} alt={user.name} />
          </div>
        ) : (
          (user.avatarUrl && (
            <AvatarImg
              alt="username"
              src={user.avatarUrl}
              sx={{ width: 124, height: 124, border: '2px solid #3E85F3' }}
            />
          )) || (
            <Avatar
              alt="username"
              src=""
              sx={{
                fontSize: '72px',
                width: 124,
                height: 124,
                border: '2px solid #3E85F3'
              }}
            >
              {user.name.split('')[0]}
            </Avatar>
          )
        )}
      </label>
    </AvatarContainer>
  );
}

AccountAvatar.propTypes = {
  selectedAvatar: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  setSelectedAvatar: PropTypes.func.isRequired,
  setImagePreview: PropTypes.func.isRequired
};
