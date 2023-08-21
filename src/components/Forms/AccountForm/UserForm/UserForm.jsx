import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { format } from 'date-fns';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { useUser } from 'src/redux/selectors';

import UniversalInput from '../../UniversalInput/UniversalInput';
import AccountAvatar from '../AccountAvatar/AccountAvatar';

import { validationAvatarRules, validationUserFormRules } from '../accountValidationRules';

import { FormWrap, UserNameTitle, RoleTitle, FormInputContainer, FormBtn } from './UserForm.styled';

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
  // const [selectedDate, setSelectedDate] = useState(initialValues.birthday);

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
                  <UniversalInput
                    label={t('UserName')}
                    type="text"
                    name="name"
                    placeholder={t('Enter your name')}
                  />
                  <UniversalInput
                    label={t('Birthday')}
                    type="date"
                    name="birthday"
                    placeholder="Pick a date of your birthday"
                  />
                  <UniversalInput
                    label={t('Phone')}
                    type="tel"
                    name="phone"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    placeholder="+380971234567"
                  />
                  <UniversalInput
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
