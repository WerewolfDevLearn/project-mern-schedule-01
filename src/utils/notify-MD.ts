import { isRejected } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { Middleware } from 'redux';

const regExpContacts = '/contacts/gm';
const regExpUser = '/user/gm';
const regExp = {
  userRegFF: 'user/Register/fulfilled',
  userLoginFF: 'user/Login/fulfilled',
  userLogOutFF: 'user/LogOut/fulfilled'
};

export const ErrorLogger: Middleware = (_api) => (next) => (action) => {
  if (isRejected(action) && action.type.match(regExpContacts)) {
    toast.error(action.payload);
  }
  if (isRejected(action) && action.type.match(regExpUser)) {
    toast.error(action.payload);
  }

  if (action.type === regExp.userRegFF)
    toast.success('Verification letter was send to you eamil adress');
  if (action.type === regExp.userLoginFF) toast.success('Welcome!');

  if (action.type === regExp.userLogOutFF) {
    toast.success('Have a nice day!');
  }

  return next(action);
};
