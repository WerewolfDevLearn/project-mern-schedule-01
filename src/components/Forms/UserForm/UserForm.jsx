import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
// import { toast } from 'react-hot-toast';
import { useUser } from 'src/redux/selectors';
import DeleteProfileModal from 'src/components/DeleteProfileModal/DeleteProfileModal';

import AccountAvatar from '../AccountAvatar/AccountAvatar';
import ChangeEmailModal from '../../ChangeEmailModal/ChangeEmailModal';
import ChangePasswordModal from '../../ChangePasswordModal/ChangePasswordModal';

import {
  FormContainer,
  FormWrap,
  UserNameTitle,
  RoleTitle,
  FormInputContainer,
  FormLabelSpan,
  InputField,
  DateInput,
  ErrorMessage,
  FormBtn,
  BtnWrapper,
  ChangeValueBtnWrap
} from './UserForm.styled';

const PATTERN_FOR_PHONE = /^\+380\d{9}$/;

const schema = yup.object().shape({
  name: yup
    .string('Enter your name')
    .min(4, 'The name is short - must contain at least 4 characters')
    .max(16, 'Name is too long - should be 16 chars maximum.')
    .required('Name is required'),
  phone: yup.string().matches(PATTERN_FOR_PHONE, 'Invalid phone number'),
  birthday: yup.date('YYYY-MM-DD'),
  skype: yup.string().max(16, 'Too long - should be 16 chars maximum.')
});

export default function UserForm({ callBack }) {
  const { t } = useTranslation();
  const user = useUser();

  const initialValues = {
    avatarUrl: user.avatarUrl || '',
    name: user.name,
    phone: user.phone || '',
    birthday: user.birthday || new Date(),
    skype: user.skype || ''
  };
  console.log(initialValues.birthday);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatarUrl);
  const [selectedDate, setSelectedDate] = useState(initialValues.birthday);

  // const handleDateChange = (date) => {
  //   console.log(data);
  //   setSelectedDate(date);
  // };

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

    // if (data.email) {
    //   formData.append('email', data.email.trim());
    // }

    callBack(formData);
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

  console.log(selectedAvatar);
  console.log(imagePreview);
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <FormContainer>
              <Form encType="multipart/form-data">
                <FormWrap>
                  <AccountAvatar
                    selectedAvatar={selectedAvatar}
                    formik={formik}
                    setSelectedAvatar={setSelectedAvatar}
                    setImagePreview={setImagePreview}
                  />
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
                  </FormInputContainer>
                  <FormBtn
                    type="submit"
                    disabled={
                      !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    }
                  >
                    {t('Save changes')}
                  </FormBtn>
                  <BtnWrapper>
                    <ChangeValueBtnWrap>
                      <ChangeEmailModal />
                      <ChangePasswordModal />
                    </ChangeValueBtnWrap>
                    <DeleteProfileModal />
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
