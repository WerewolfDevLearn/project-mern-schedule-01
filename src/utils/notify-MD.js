import { isFulfilled, isRejected } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const regExp = {
  userRegFF: 'user/Register/fulfilled',
  userLoginFF: 'user/Login/fulfilled',
  userLogOutFF: 'user/LogOut/fulfilled',
  userUpdateFF: 'user/Update/fulfilled',
  userRegRG: 'user/Register/rejected',
  userLoginRG: 'user/Login/rejected',
  userLogOutRG: 'user/LogOut/rejected',
  userUpdateRG: 'user/Update/rejected',
  userGCRG: 'user/GetCurrent/rejected'
};

export const ErrorLogger = (_api) => (next) => (action) => {
  if (action.type === regExp.userRegFF) {
    toast.success('Verification letter was send to you email address');
  }
  if (action.type === regExp.userLoginFF) {
    toast.success('Welcome!');
  }
  if (action.type === regExp.userUpdateFF) {
    toast.success('User updated!');
  }

  if (
    isRejected(action) &&
    action.type === regExp.userLoginRG &&
    action.payload === 'Action Required: Verify Your Email'
  ) {
    toast.error(' Please check you email');
  }
  if (
    isRejected(action) &&
    action.type === regExp.userGCRG &&
    action.payload === 'Request failed with status code 500'
  ) {
    toast.error('Please login');
  }

  if (
    isRejected(action) &&
    action.type === regExp.userLoginRG &&
    action.payload !== 'Action Required: Verify Your Email'
  ) {
    toast.error('Unauthorized');
  }

  if (isRejected(action) && action.type === regExp.userRegRG) {
    toast.error(
      ' User with such name and email is exist. Please chagne you register information or Log in'
    );
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

  if (isRejected(action) && action.meta.arg && action.type.includes('tasks')) {
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
