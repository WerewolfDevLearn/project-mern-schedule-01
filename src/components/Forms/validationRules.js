import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .matches(/^[a-zA-Z0-9_]*$/, 'Only letters, underscores and numbers are allowed')
    .required(),
  email: Yup.string().required('Email is a required field').email('Invalid email format'),
  password: Yup.string()
    .required('Password is a required field')
    .min(6, 'Password must be at least 6 characters')
});
