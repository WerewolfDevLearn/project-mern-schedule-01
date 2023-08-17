import { isFulfilled, isRejected } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const regExpContacts = '/contacts/gm';
const regExpUser = '/user/gm';
const regExp = {
  userRegFF: 'user/Register/fulfilled',
  userLoginFF: 'user/Login/fulfilled',
  userLogOutFF: 'user/LogOut/fulfilled',
  userUpdateFF: 'user/Update/fulfilled'
};

export const ErrorLogger = (_api) => (next) => (action) => {
  if (isRejected(action) && action.type.match(regExpContacts)) {
    toast.error(action.payload);
  }
  if (isRejected(action) && action.type.match(regExpUser)) {
    toast.error(action.payload);
  }

  if (action.type === regExp.userRegFF) {
    toast.success('Verification letter was send to you email address');
  }
  if (action.type === regExp.userLoginFF) {
    toast.success('Welcome!');
  }
  if (action.type === regExp.userUpdateFF) {
    toast.success('User updated!');
  }

  if (isFulfilled(action) && action.meta.arg) {
    const { message } = action.payload;
    const { endpointName } = action.meta.arg;

    // Tasks
    if (endpointName === 'createTasks') {
      toast.success(message);
    }
    if (endpointName === 'deleteTasks') {
      toast.success(message);
    }
    if (endpointName === 'updateTasks') {
      toast.success(message);
    }

    // Reviews
    if (endpointName === 'createReviews') {
      toast.success(message);
    }
    if (endpointName === 'deleteReviews') {
      toast.success(message);
    }
    if (endpointName === 'updateReviews') {
      toast.success(message);
    }
  }

  if (isRejected(action) && action.meta.arg) {
    const { message } = action.payload.data;
    if (action.meta.arg.endpointName === 'createTasks') {
      toast.error(message);
    }
    if (action.meta.arg.endpointName === 'deleteTasks') {
      toast.error(message);
    }
    if (action.meta.arg.endpointName === 'updateTasks') {
      toast.error(message);
    }
  }

  return next(action);
};
