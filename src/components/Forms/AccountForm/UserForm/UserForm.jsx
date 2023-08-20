import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { useUser } from 'src/redux/selectors';

import AccountAvatar from '../AccountAvatar/AccountAvatar';

import { validationAvatarRules, validationUserFormRules } from '../accountValidationRules';

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
  FormBtn
} from './UserForm.styled';

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

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatarUrl);
  const [selectedDate, setSelectedDate] = useState(initialValues.birthday);

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        if (value instanceof File) {
          formData.append(key, value);
        } else if (typeof value === 'string') {
          formData.append(key, value.trim());
        } else {
          formData.append(key, value);
        }
      } else if (key === 'birthday') {
        const birthday = format(new Date(value[key]), 'yyyy-MM-dd');
        formData.append('birthday', birthday);
      }
    });

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

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={(validationUserFormRules, validationAvatarRules)}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
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
              </FormWrap>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

UserForm.propTypes = {
  callBack: PropTypes.func.isRequired
};
