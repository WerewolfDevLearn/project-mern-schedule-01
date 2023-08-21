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
    i18n.t('formats'),
    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
  )
});

export const validationChangeEmailRules = Yup.object().shape({
  email: Yup.string(i18n.t('EnterEmail'))
    .email(i18n.t('Error email'))
    .required(i18n.t('EmailRequired'))
});

export const validationChangePasswordRules = Yup.object().shape({
  password: Yup.string().min(6, i18n.t('ShortPassword')).required(i18n.t('Password Required')),
  confirmPassword: Yup.string()
    .min(6, i18n.t('ShortPassword'))
    .required(i18n.t('Password Required'))
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const validationUserFormRules = Yup.object().shape({
  name: Yup.string(i18n.t('Enter your name'))
    .min(4, i18n.t('Name4'))
    .max(16, i18n.t('TooLong16'))
    .matches(PATTERN_FOR_NAME, i18n.t('Only letters'))
    .required(i18n.t('NameRequired')),
  phone: Yup.string().matches(PATTERN_FOR_PHONE, i18n.t('InvalidPhone')),
  birthday: Yup.date('YYYY-MM-DD'),
  skype: Yup.string().max(16, i18n.t('TooLong16'))
});
