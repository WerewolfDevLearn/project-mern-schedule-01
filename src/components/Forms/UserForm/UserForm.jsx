import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

// import { toast } from 'react-hot-toast';
import { useUser } from 'src/redux/selectors';

import { Avatar, Plus } from 'src/components/shared/Icons';
import Modal from 'src/components/shared/Modal/Modal';

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
  FormInputContainer,
  FormLabelSpan,
  InputField,
  DateInput,
  ErrorMessage,
  FormBtn,
  BtnWrapper,
  ChangePassBtn,
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
  // console.log(defaultAvatar);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [imagePreview, setImagePreview] = useState(initialValues.avatarUrl);
  const [selectedDate, setSelectedDate] = useState(new Date(initialValues.birthday || new Date()));
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);

  const handleAddImageClick = () => fileInputRef.current.click();

  const handleDateChange = (date) => setSelectedDate(date);

  const onSubmit = (data, actions) => {
    // const formData = new FormData();

    // if (values.avatar) {
    //   formData.append('avatarUrl', values.avatar);
    // }
    // if (values.name) {
    //   formData.append('name', values.name.trim());
    // }
    // if (values.phone) {
    //   formData.append('phone', values.phone);
    // }
    // if (values.birthday) {
    //   formData.append('birthday', values.birthday);
    // }
    // if (values.skype) {
    //   formData.append('skype', values.skype.trim());
    // }
    // if (values.email) {
    //   formData.append('email', values.email.trim());
    // }
    console.log(data);
    callBack(data);

    // dispatch(getState(formData));

    // const formDataObject = {};
    // for (let [key, value] of formData.entries()) {
    // formDataObject[key] = value;

    // console.log(formDataObject);
    // }

    // console.log(values);
    // console.log(formData);
    // resetForm();
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
              <Form encType="multipart/form-data" onSubmit={onSubmit}>
                <FormWrap>
                  <AvatarContainer>
                    <AvatarAddIcon>
                      <Plus width="18px" height="18px" onClick={handleAddImageClick} />
                    </AvatarAddIcon>
                    <label>
                      <AvatarInputField
                        type="file"
                        name="avatarUrl"
                        ref={fileInputRef}
                        onBlur={() => formik.setTouched({ avatar: true })}
                        onChange={(e) => {
                          const avatar = e.target.files[0];
                          // console.log('AVATAR', avatar);

                          if (avatar && SUPPORTED_FORMATS.includes(avatar.type)) {
                            formik.setFieldValue('avatar', avatar);
                            setSelectedAvatar(URL.createObjectURL(avatar));
                            setImagePreview('');
                            // return;
                          }
                        }}
                      />
                      {!selectedAvatar && (
                        <AvatarImgContainer>
                          <Avatar width="48px" height="48px" />
                        </AvatarImgContainer>
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
                  <h3>{t('User')}</h3>
                  <FormInputContainer>
                    <FormikInput
                      label={t('UserName')}
                      type="text"
                      name="name"
                      placeholder={t('Enter your name')}
                    />
                    <FormikInput
                      label={t('Phone')}
                      type="tel"
                      name="phone"
                      placeholder="+380971234567"
                    />
                    <label htmlFor="birthday">
                      <FormLabelSpan>{t('Birthday')}</FormLabelSpan>
                      <DateInput
                        id="birthday"
                        name="birthday"
                        selected={selectedDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={handleDateChange}
                      />
                      <ErrorMessage name="birthday" component="div" />
                    </label>
                    <FormikInput
                      label={t('Skype')}
                      type="text"
                      name="skype"
                      placeholder={t('Add a skype number')}
                    />
                    <FormikInput
                      label={t('UserEmail')}
                      type="email"
                      name="email"
                      placeholder={t('Enter email')}
                    />
                    <BtnWrapper>
                      <ChangePassBtn type="button" onClick={openChangePasswordModal}>
                        Change password
                      </ChangePassBtn>
                      <DeleteProfileBtn type="button" onClick={openDeleteProfileModal}>
                        Delete profile
                      </DeleteProfileBtn>
                    </BtnWrapper>
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
                    disabled={!formik.isValid || formik.isSubmitting}
                    onClick={() => {
                      formik.handleSubmit();
                    }}
                  >
                    {t('Save changes')}
                  </FormBtn>
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
