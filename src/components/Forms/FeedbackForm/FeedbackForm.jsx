import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Rating from '@mui/material/Rating';
import { useTranslation } from 'react-i18next';

import {
  useCreateReviewsMutation,
  useDeleteReviewsMutation,
  useUpdateReviewsMutation
} from '../../../redux/reviews/reviewsApi';

import {
  FeedbackFormStyles,
  Label,
  LabelInner,
  ReviewActions,
  EditBtn,
  RemoveBtn,
  PencilIcon,
  TrashIcon,
  ButtonCloseWrap,
  CloseIcon,
  InputReview,
  ButtonsWrapper,
  ButtonAction,
  ButtonCancel,
  ErrorMessage,
  RatingStarActive,
  RatingStarDisable
} from './FeedbackForm.styled';

export default function FeedbackForm({ onClose, action, reviewToEdit }) {
  const [createReview] = useCreateReviewsMutation();
  const [deleteReview] = useDeleteReviewsMutation();
  const [updateReview] = useUpdateReviewsMutation();
  const [selectAction, setSelectAction] = useState(action);

  const { t } = useTranslation();

  let _id, rating, comment;

  if (typeof reviewToEdit === 'object' && reviewToEdit !== null && true) {
    ({ _id, rating, comment } = reviewToEdit);
  }

  const handleSubmit = (values, actions) => {
    if (selectAction === 'add') {
      createReview(values);
    }

    if (selectAction === 'edit') {
      updateReview({ id: _id, ...values });
    }

    actions.resetForm();
    onClose();
  };

  const removeReview = () => {
    deleteReview(_id);
    onClose();
  };

  const validationSchema = Yup.object({
    rating: Yup.number().required('Select a grade'),
    comment: Yup.string('Review must be a string').required('Review is required')
  });

  const formik = useFormik({
    initialValues: {
      rating: ((selectAction === 'edit' || selectAction === 'view') && rating) || 0,
      comment: ((selectAction === 'edit' || selectAction === 'view') && comment) || ''
    },
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <FeedbackFormStyles>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <Label>
            {t('Rating')}
            <Rating
              name="rating"
              readOnly={selectAction === 'view'}
              value={formik.values.rating}
              icon={<RatingStarActive />}
              emptyIcon={<RatingStarDisable />}
              onChange={(_, value) => formik.setFieldValue('rating', value)}
            />
            <ErrorMessage name="rating" component="div" />
          </Label>

          <Label htmlFor="comment">
            <LabelInner>
              {t('Review')}
              {selectAction !== 'add' && (
                <ReviewActions>
                  <EditBtn type="button" onClick={() => setSelectAction('edit')}>
                    <PencilIcon />
                  </EditBtn>
                  <RemoveBtn type="button" onClick={removeReview}>
                    <TrashIcon />
                  </RemoveBtn>
                </ReviewActions>
              )}
            </LabelInner>
            <InputReview
              name="comment"
              as="textarea"
              disabled={selectAction === 'view'}
              placeholder={t('Enter comment')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
            />
            <ErrorMessage name="comment" component="div" />
          </Label>

          {(selectAction === 'add' || selectAction === 'edit') && (
            <ButtonsWrapper>
              <ButtonAction type="submit">
                {selectAction === 'add' ? t('Save') : t('Edit')}
              </ButtonAction>
              <ButtonCancel onClick={onClose}>{t('Cancel')}</ButtonCancel>
            </ButtonsWrapper>
          )}

          <ButtonCloseWrap type="button" aria-label="close button" onClick={onClose}>
            <CloseIcon />
          </ButtonCloseWrap>
        </form>
      </Formik>
    </FeedbackFormStyles>
  );
}

FeedbackForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  reviewToEdit: PropTypes.shape({
    _id: PropTypes.string,
    rating: PropTypes.number,
    comment: PropTypes.string
  })
};
