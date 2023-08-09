import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { InputField } from '../InputField/InputField';
import { validationRules } from '../validationRules';

import { Form } from './RegisterForm.styled';

export default function RegisterForm({ option, title, buttonName, onSubmitForm }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    onSubmitForm(data);
    reset();
  };

  return (
    <>
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {option === 'register' && (
          <InputField
            label="Name:"
            placeholder="Name"
            type="text"
            name="name"
            rules={validationRules.userName}
            formContext={{ register, formState: { errors } }}
          />
        )}
        <InputField
          label="Email:"
          placeholder="Email"
          type="email"
          name="email"
          rules={validationRules.userEmail}
          formContext={{ register, formState: { errors } }}
        />

        <InputField
          label="Password:"
          placeholder="Password"
          type="password"
          name="password"
          rules={validationRules.password}
          formContext={{ register, formState: { errors } }}
        />

        <button type="submit" disabled={!isValid}>
          {buttonName}
        </button>
      </Form>
    </>
  );
}

RegisterForm.propTypes = {
  option: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired
};
