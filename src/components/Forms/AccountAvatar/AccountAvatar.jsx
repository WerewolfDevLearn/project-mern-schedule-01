import { useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/redux/selectors';
import { Plus, Trash } from 'src/components/shared/Icons';

import { SUPPORTED_FORMATS } from '../validationRules';

import {
  AvatarDeleteIcon,
  AvatarAddIcon,
  AvatarContainer,
  AvatarInputField,
  AvatarImgContainer,
  AvatarImg
} from './AccountAvatar.styled';

export default function AccountAvatar({
  selectedAvatar,
  formik,
  setSelectedAvatar,
  setImagePreview
}) {
  const { t } = useTranslation();
  const user = useUser();
  const fileInputRef = useRef(null);

  const handleAddImageClick = () => fileInputRef.current.click();
  const handleDeleteImageClick = () => fileInputRef.current.click();

  return (
    <AvatarContainer>
      <AvatarDeleteIcon>
        <Trash width="18px" height="18px" onClick={handleDeleteImageClick} />
      </AvatarDeleteIcon>
      <AvatarAddIcon>
        <Plus width="18px" height="18px" onClick={handleAddImageClick} />
      </AvatarAddIcon>
      <label>
        <AvatarInputField
          type="file"
          name="avatar"
          ref={fileInputRef}
          onBlur={() => formik.setTouched({ avatar: true })}
          onChange={(e) => {
            const avatar = e.target.files[0];
            // console.log('AVATAR', avatar);

            if (avatar && SUPPORTED_FORMATS.includes(avatar.type)) {
              formik.setFieldValue('avatar', avatar);
              setSelectedAvatar(URL.createObjectURL(avatar));
              setImagePreview('');
            }
          }}
        />

        {selectedAvatar ? (
          <div>
            {/* {console.log('SELECT AVATAR', selectedAvatar)} */}
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
