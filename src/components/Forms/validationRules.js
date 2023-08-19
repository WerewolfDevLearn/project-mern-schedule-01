import * as Yup from 'yup';
import i18n from 'i18next';

export const validationRegisterRules = Yup.object().shape({
  name: Yup.string()
    .min(4, i18n.t('Too Short'))
    .max(20, i18n.t('Too Long'))
    .matches(/^[a-zA-Z0-9_]*$/, i18n.t('Only letters'))
    .required(i18n.t('Name Required')),
  email: Yup.string().required(i18n.t('Email Required')).email(i18n.t('Invalid Email')),
  password: Yup.string().required(i18n.t('Password Required')).min(6, i18n.t('Password Characters'))
});
export const validationLoginRules = Yup.object().shape({
  email: Yup.string().required(i18n.t('Email Required')).email(i18n.t('Invalid Email')),
  password: Yup.string().required(i18n.t('Password Required')).min(6, i18n.t('Password Characters'))
});

export const SUPPORTED_FORMATS = [
  'image/webp',
  'image/jpg',
  'image/jpeg',
  'image/gif',
  'image/png'
];

export const validationAvatarRules = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileType',
    'Only PNG, JPEG, JPG or GIF formats are supported',
    (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
  )
});

export const validationChangePasswordRules = Yup.object().shape({
  password: Yup.string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required')),
  newPassword: Yup.string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required')),
  confirmPassword: Yup.string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required'))
});
