import PropTypes from 'prop-types';

export const InputField = ({ label, placeholder, type, name, rules, formContext }) => {
  const {
    register,
    formState: { errors }
  } = formContext;
  const error = errors?.[name];

  return (
    <label>
      {label}
      <input placeholder={placeholder} type={type} {...register(name, rules)} />
      {error && <span>{error.message || 'Error'}</span>}
    </label>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rules: PropTypes.object.isRequired,
  formContext: PropTypes.object.isRequired
};
