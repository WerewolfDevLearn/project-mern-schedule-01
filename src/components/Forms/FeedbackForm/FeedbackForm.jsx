import { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';

import { RatingStar } from 'src/components/shared/Icons';

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
  ErrorMessage
} from './FeedbackForm.styled';

export default function FeedbackForm({ onClose, action = 'add', reviewToEdit }) {
  const [selectAction, setSelectAction] = useState(action);

  let _id, rating, reviewText;

  if (typeof reviewToEdit === 'object' && reviewToEdit !== null && true) {
    ({ _id, rating, reviewText } = reviewToEdit);
  }

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (action === 'add') {
      dispatch(useCreateReviewsMutation(values));
    }

    if (action === 'edit') {
      dispatch(useUpdateReviewsMutation({ _id, ...values }));
    }

    actions.resetForm();
    onClose();
  };

  const removeReview = () => {
    dispatch(useDeleteReviewsMutation(_id));
  };

  const validationSchema = Yup.object({
    rating: Yup.number().required('Select a grade'),
    reviewText: Yup.string('Review must be a string').required('Review is required')
  });

  const formik = useFormik({
    initialValues: {
      rating: ((selectAction === 'edit' || selectAction === 'view') && rating) || 0,
      reviewText: ((selectAction === 'edit' || selectAction === 'view') && reviewText) || ''
    },
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <FeedbackFormStyles>
      <Formik>
        <form onSubmit={formik.handleSubmit}>
          <Label>
            Rating
            <Rating
              name="rating"
              defaultValue={formik.values.rating}
              icon={<RatingStar color="#FFAC33" />}
              emptyIcon={<RatingStar color="#CEC9C1" />}
              onChange={(_, value) => formik.setFieldValue('rating', value)}
            />
            <ErrorMessage name="rating" component="div" />
          </Label>

          <Label>
            <LabelInner>
              Review
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
              name="reviewText"
              as="textarea"
              disabled={selectAction === 'view'}
              placeholder="Enter text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.reviewText}
            />
            <ErrorMessage name="reviewText" component="div" />
          </Label>

          {(selectAction === 'add' || selectAction === 'edit') && (
            <ButtonsWrapper>
              <ButtonAction type="submit">{selectAction === 'add' ? 'Save' : 'Edit'}</ButtonAction>
              <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
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
    reviewText: PropTypes.string
  })
};
