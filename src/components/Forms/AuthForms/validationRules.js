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

export const validationReserEmailRules = Yup.object().shape({
  email: Yup.string().required(i18n.t('Email Required')).email(i18n.t('Invalid Email'))
});

export const validationReserPwdRules = Yup.object().shape({
  newPassword: Yup.string()
    .required(i18n.t('Password Required'))
    .min(6, i18n.t('Password Characters')),
  confirmPassword: Yup.string()
    .required(i18n.t('Password Required'))
    .min(6, i18n.t('Password Characters'))
    .oneOf([Yup.ref('newPassword')], i18n.t('Must Match'))
});
