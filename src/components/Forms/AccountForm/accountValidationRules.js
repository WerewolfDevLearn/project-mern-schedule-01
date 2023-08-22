import * as Yup from 'yup';
import i18n from 'i18next';

export const SUPPORTED_FORMATS = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon'
];

const PATTERN_FOR_NAME = /^[a-zA-Z0-9_]*$/;
const PATTERN_FOR_PHONE = /^\+380\d{9}$/;

export const validationAvatarRules = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileType',
    'Only supported image formats are allowed',
    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
  )
});

export const validationChangeEmailRules = Yup.object().shape({
  email: Yup.string('Enter your email').email(i18n.t('Error email')).required('Email is required')
});

export const validationChangePasswordRules = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required')),
  confirmPassword: Yup.string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required'))
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
});

export const validationUserFormRules = Yup.object().shape({
  name: Yup.string('Enter your name')
    .min(4, 'The name is short - must contain at least 4 characters')
    .max(16, 'Name is too long - should be 16 chars maximum.')
    .matches(PATTERN_FOR_NAME, i18n.t('Only letters'))
    .required('Name is required'),
  phone: Yup.string().matches(PATTERN_FOR_PHONE, 'Invalid phone number'),
  birthday: Yup.date('YYYY-MM-DD'),
  skype: Yup.string().max(16, 'Too long - should be 16 chars maximum.')
});
