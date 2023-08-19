import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-hot-toast';
import { useUser } from 'src/redux/selectors';
import { Plus } from 'src/components/shared/Icons';
import Modal from 'src/components/shared/Modal/Modal';

import ChangeEmailForm from '../ChangeEmailForm/ChangeEmailForm';
import ChangePasswordForm from '../ChangePasswordForm/ChangePasswordForm';
import DeleteProfileForm from '../DeleteProfileForm/DeleteProfileForm';

import {
  FormContainer,
  FormWrap,
  AvatarAddIcon,
  AvatarContainer,
  AvatarInputField,
  AvatarImgContainer,
  AvatarImg,
  UserNameTitle,
  RoleTitle,
  FormInputContainer,
  FormLabelSpan,
  InputField,
  DateInput,
  ErrorMessage,
  FormBtn,
  BtnWrapper,
  ChangeValueBtnWrap,
  ChangeValueBtn,
  DeleteProfileBtn
} from './UserForm.styled';

const SUPPORTED_FORMATS = ['image/webp', 'image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const PATTERN_FOR_PHONE = /^\+380\d{9}$/;

const schema = yup.object().shape({
  avatar: yup
    .mixed()
    .test(
      'fileType',
      'Only PNG, JPEG, JPG or GIF formats are supported',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
  name: yup
    .string('Enter your name')
    .min(4)
    .max(16, 'Name is too long - should be 16 chars maximum.')
    .required('Name is required'),
  phone: yup.string().matches(PATTERN_FOR_PHONE, 'Invalid phone number'),
  birthday: yup.date('yyyy - mm - dd'),
  skype: yup.string().max(16, 'Too long - should be 16 chars maximum.'),
  email: yup.string('Enter your email').email(i18n.t('Error email')).required('Email is required')
});

export default function UserForm({ callBack }) {
  const { t } = useTranslation();
  const user = useUser();
  const fileInputRef = useRef(null);

  const initialValues = {
    avatarUrl: user.avatarUrl || '',
    name: user.name,
    phone: user.phone || '',
    birthday: user.birthday,
    skype: user.skype || '',
    email: user.email
  };
  // console.log(initialValues.birthday);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialValues.avatarUrl);
  const [selectedDate, setSelectedDate] = useState(initialValues.birthday);
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);

  const handleAddImageClick = () => fileInputRef.current.click();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onSubmit = (data) => {
    const formData = new FormData();

    if (data.avatar) {
      formData.append('avatar', data.avatar);
    }

    if (data.name) {
      formData.append('name', data.name.trim());
    }

    if (data.phone) {
      formData.append('phone', data.phone);
    }

    if (data.birthday) {
      formData.append('birthday', data.birthday);
    }

    if (data.skype) {
      formData.append('skype', data.skype.trim());
    }

    if (data.email) {
      formData.append('email', data.email.trim());
    }

    callBack(formData);
  };

  const openChangeEmailModal = () => {
    setShowChangeEmailModal(true);
  };

  const closeChangeEmailModal = () => {
    setShowChangeEmailModal(false);
  };

  const openChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const closeChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  const openDeleteProfileModal = () => {
    setShowDeleteProfileModal(true);
  };

  const closeDeleteProfileModal = () => {
    setShowDeleteProfileModal(false);
  };

  const FormikInput = ({ label, type, name, placeholder }) => {
    return (
      <label htmlFor={name}>
        <FormLabelSpan>{label}</FormLabelSpan>
        <InputField id={name} type={type} name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component="div" />
      </label>
    );
  };

  FormikInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        // enableReinitialize
      >
        {(formik) => {
          return (
            <FormContainer>
              <Form encType="multipart/form-data">
                <FormWrap>
                  <AvatarContainer>
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
                      {!selectedAvatar && (
                        <div>
                          <AvatarImg src={imagePreview} alt={initialValues.name} />
                        </div>
                      )}
                      {selectedAvatar && (
                        <div>
                          <AvatarImg src={selectedAvatar} alt={user.name} />
                        </div>
                      )}
                      {/* {imagePreview && (
                        <AvatarImgContainer>
                          <AvatarImg src={imagePreview} alt={initialValues.name} />
                        </AvatarImgContainer>
                      )} */}
                    </label>
                  </AvatarContainer>
                  <UserNameTitle>{user.name}</UserNameTitle>
                  <RoleTitle>{t('User')}</RoleTitle>
                  <FormInputContainer>
                    <FormikInput
                      label={t('UserName')}
                      type="text"
                      name="name"
                      placeholder={t('Enter your name')}
                    />
                    <FormikInput
                      label={t('Birthday')}
                      type="date"
                      name="birthday"
                      placeholder="Pick a date of your birthday"
                      views={['year', 'month', 'day']}
                    />
                    {/* <label htmlFor="birthday">
                      <FormLabelSpan>{t('Birthday')}</FormLabelSpan>
                      <DateInput
                        id="birthday"
                        name="birthday"
                        selected={selectedDate}
                        dateFormat="dd-MM-yyyy"
                        onSelect={handleDateChange}
                      />
                      <ErrorMessage name="birthday" component="div" />
                    </label> */}
                    {/* <FormikInput
                      label={t('UserEmail')}
                      type="email"
                      name="email"
                      placeholder={t('Enter email')}
                    /> */}
                    <FormikInput
                      label={t('Phone')}
                      type="tel"
                      name="phone"
                      placeholder="+380971234567"
                    />
                    <FormikInput
                      label={t('Skype')}
                      type="text"
                      name="skype"
                      placeholder={t('Add a skype number')}
                    />
                    {showChangeEmailModal && (
                      <Modal isOpen={showChangeEmailModal} onClose={closeChangeEmailModal}>
                        {<ChangeEmailForm onClose={closeChangeEmailModal} />}
                      </Modal>
                    )}
                    {showChangePasswordModal && (
                      <Modal isOpen={showChangePasswordModal} onClose={closeChangePasswordModal}>
                        {<ChangePasswordForm onClose={closeChangePasswordModal} />}
                      </Modal>
                    )}
                    {showDeleteProfileModal && (
                      <Modal isOpen={showDeleteProfileModal} onClose={closeDeleteProfileModal}>
                        {<DeleteProfileForm onClose={closeDeleteProfileModal} />}
                      </Modal>
                    )}
                  </FormInputContainer>
                  <FormBtn
                    type="submit"
                    // disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {t('Save changes')}
                  </FormBtn>
                  <BtnWrapper>
                    <ChangeValueBtnWrap>
                      <ChangeValueBtn type="button" onClick={openChangeEmailModal}>
                        Change email
                      </ChangeValueBtn>
                      <ChangeValueBtn type="button" onClick={openChangePasswordModal}>
                        Change password
                      </ChangeValueBtn>
                    </ChangeValueBtnWrap>
                    <DeleteProfileBtn type="button" onClick={openDeleteProfileModal}>
                      Delete profile
                    </DeleteProfileBtn>
                  </BtnWrapper>
                </FormWrap>
              </Form>
            </FormContainer>
          );
        }}
      </Formik>
    </>
  );
}

UserForm.propTypes = {
  callBack: PropTypes.func.isRequired
};
