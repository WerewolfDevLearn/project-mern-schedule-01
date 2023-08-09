export const validationRules = {
  userName: {
    required: 'Name is required',
    minLength: { value: 2, message: 'Minimum 2 characters' }
  },
  userEmail: {
    required: 'Email is required',
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email (example@xmpl.com)'
    }
  },
  password: {
    required: 'Password is required',
    minLength: { value: 6, message: 'Minimum 6 symbols' }
  }
};
