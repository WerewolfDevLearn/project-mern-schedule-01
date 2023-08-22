import { isFulfilled, isRejected } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import i18n from 'i18next';

const regExp = {
  userRegFF: 'user/Register/fulfilled',
  userLoginFF: 'user/Login/fulfilled',
  userLogOutFF: 'user/LogOut/fulfilled',
  userUpdateFF: 'user/Update/fulfilled',
  userRegRG: 'user/Register/rejected',
  userLoginRG: 'user/Login/rejected',
  userLogOutRG: 'user/LogOut/rejected',
  userUpdateRG: 'user/Update/rejected',
  userGCRG: 'user/GetCurrent/rejected',
  userChPWRG: 'user/ChangePassword/rejected',
  userChPWFF: 'user/ChangePassword/fulfilled',
  userEmailCRG: 'user/ChangeEmail/rejected',
  userEmailCFF: 'user/ChangeEmail/fulfilled',
  userVerifyRG: 'user/VerifyEmail/rejected',
  userVerifyFF: 'user/VerifyEmail/fulfilled'
};

export const ErrorLogger = (_api) => (next) => (action) => {
  console.log('actio: ', action);

  if (action.type === regExp.userRegFF) {
    toast.success(i18n.t('Verification letter was send to you email address'));
  }
  if (action.type === regExp.userLoginFF) {
    toast.success(i18n.t('Welcome'));
  }
  if (action.type === regExp.userUpdateFF) {
    toast.success(i18n.t('UserUpdated'));
  }

  if (action.type === regExp.userEmailCFF) {
    toast.success('Email was updated successfully!'); // i18n.t('UserUpdated')
  }
  if (action.type === regExp.userEmailCRG) {
    toast.error('Your email has not been updated. Please try again later'); // i18n.t('UserUpdated')
  }
  if (action.type === regExp.userChPWFF) {
    toast.success('Password was updated successfully!'); // i18n.t('UserUpdated')
  }
  if (action.type === regExp.userChPWRG) {
    toast.error('Your Password has not been updated. Please try again later'); // i18n.t('UserUpdated')
  }
  if (action.type === regExp.userChPWFF) {
    toast.success('A verification code has been sent to your email. Please check it!'); // i18n.t('UserUpdated')
  }
  if (action.type === regExp.userChPWRG) {
    toast.error('Something went wrong. Please try again'); // i18n.t('UserUpdated')
  }

  if (
    isRejected(action) &&
    action.type === regExp.userLoginRG &&
    action.payload === 'Action Required: Verify Your Email'
  ) {
    toast.success(i18n.t('CheckEmail'));
  }
  if (
    isRejected(action) &&
    action.type === regExp.userGCRG &&
    action.payload === 'Request failed with status code 500'
  ) {
    toast.error(i18n.t('PleaseLogin'));
  }

  if (
    isRejected(action) &&
    action.type === regExp.userLoginRG &&
    action.payload !== 'Action Required: Verify Your Email'
  ) {
    toast.error(i18n.t('Unauthorized'));
  }

  if (isRejected(action) && action.type === regExp.userRegRG) {
    toast.error(i18n.t('UserExists'));
  }

  if (isFulfilled(action) && action.meta.arg) {
    const { endpointName } = action.meta.arg;

    // Tasks
    if (endpointName === 'createTasks') {
      toast.success(i18n.t('CreateTasksSuccess'));
    }
    if (endpointName === 'deleteTasks') {
      toast.success(i18n.t('DeleteTasksSuccess'));
    }
    if (endpointName === 'updateTasks') {
      toast.success(i18n.t('UpdateTasksSuccess'));
    }

    // Reviews
    if (endpointName === 'createReviews') {
      toast.success(i18n.t('CreateReviewsSuccess'));
    }
    if (endpointName === 'deleteReviews') {
      toast.success(i18n.t('DeleteReviewsSuccess'));
    }
    if (endpointName === 'updateReviews') {
      toast.success(i18n.t('UpdateReviewsSuccess'));
    }
  }

  if (isRejected(action) && action.meta.arg && action.type.includes('tasks')) {
    if (action.meta.arg.endpointName === 'createTasks') {
      toast.error(i18n.t('TasksCreateError'));
    }
    if (action.meta.arg.endpointName === 'deleteTasks') {
      toast.error(i18n.t('TasksDeleteteError'));
    }
    if (action.meta.arg.endpointName === 'updateTasks') {
      toast.error(i18n.t('TasksUpdateError'));
    }
  }

  return next(action);
};
