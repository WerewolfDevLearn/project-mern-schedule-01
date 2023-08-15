import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {
  useCreateTasksMutation,
  useUpdateTasksMutation
} from 'src/redux/tasks/tasksApi';

import {
  ButtonAction,
  ButtonCancel,
  ButtonCloseWrap,
  ButtonWrapper,
  CloseIcon,
  ErrorMessage,
  Form,
  InputTime,
  InputTitle,
  Label,
  RadioField,
  RadioLabel,
  RadioSpan,
  RadioWrapper,
  TimeWrapper,
  PlusIcon,
  PencilIcon
} from './TaskForm.styled';

const TaskSchema = Yup.object().shape({
  title: Yup.string().max(250, 'Title is too long').required('Title is required'),
  start: Yup.string().required('Start time is required'),
  end: Yup.string()
    .required('End time is required')
    .test('is-greater', 'End time should be greater than start time', function (value) {
      const { start } = this.parent;
      if (start && value) {
        const startTime = new Date(`2000-01-01T${start}`);
        const endTime = new Date(`2000-01-01T${value}`);
        return endTime > startTime;
      }
      return true;
    }),
  priority: Yup.string().oneOf(['low', 'medium', 'high']).required('Priority is required'),
  date: Yup.date()
    .required('Date is required')
    .transform((value, originalValue) => {
      if (originalValue) {
        const [year, month, day] = originalValue.split('-');
        return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
      }
      return value;
    }),
  category: Yup.string().oneOf(['to-do', 'in-progress', 'done']).required('Category is required')
});

export const TaskForm = ({ onClose, action, column, taskToEdit }) => {
  const { t } = useTranslation();
  let _id, title, start, end, priority, date;

  if (typeof taskToEdit === 'object' && taskToEdit !== null && true) {
    ({ _id, title, start, end, priority, date } = taskToEdit);
  }

  const [createTask, ctreateResult] = useCreateTasksMutation();
  const [updateTask, updateResult] = useUpdateTasksMutation();

  const { currentDay } = useParams();

  const handleSubmit = (values, actions) => {
    if (action === 'add') {
      // createTask;
    }

    if (action === 'edit') {
      // updateTask;
    }

    actions.resetForm();
    onClose();
  };

  const setCategory = () => {
    if (column === 'To do') return 'to-do';
    if (column === 'In progress') return 'in-progress';
    if (column === 'Done') return 'done';
  };

  return (
    <Formik
      initialValues={{
        title: (action === 'edit' && title) || '',
        start: (action === 'edit' && start) || '09:00',
        end: (action === 'edit' && end) || '10:00',
        priority: (action === 'edit' && priority) || 'low',
        date: (action === 'edit' && date) || currentDay,
        category: setCategory()
      }}
      validationSchema={TaskSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          {t('Title')}
          <InputTitle type="text" name="title" placeholder={t('Enter text')} />
          <ErrorMessage name="title" component="div" />
        </Label>

        <TimeWrapper>
          <Label>
            {t('Start')}
            <InputTime type="time" name="start" />
            <ErrorMessage name="start" component="div" />
          </Label>
          <Label>
            {t('End')}
            <InputTime type="time" name="end" />
            <ErrorMessage name="end" component="div" />
          </Label>
        </TimeWrapper>

        <RadioWrapper role="group" aria-labelledby="my-radio-group">
          <RadioLabel>
            <RadioField type="radio" name="priority" value="low" />
            <RadioSpan value="low" />
            {t('Low')}
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="medium" />
            <RadioSpan value="medium" />
            {t('Medium')}
          </RadioLabel>
          <RadioLabel>
            <RadioField type="radio" name="priority" value="high" />
            <RadioSpan value="high" />
            {t('High')}
          </RadioLabel>
        </RadioWrapper>

        <ButtonWrapper>
          {action === 'add' ? (
            <ButtonAction type="submit">
              <PlusIcon />
              {t('Add')}
            </ButtonAction>
          ) : (
            <ButtonAction type="submit">
              <PencilIcon />
              {t('Edit')}
            </ButtonAction>
          )}

          <ButtonCancel type="button" onClick={onClose}>
            {t('Cancel')}
          </ButtonCancel>
        </ButtonWrapper>

        <ButtonCloseWrap type="button" aria-label="close button" onClick={onClose}>
          <CloseIcon />
        </ButtonCloseWrap>
      </Form>
    </Formik>
  );
};

TaskForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  action: PropTypes.oneOf(['add', 'edit']).isRequired,
  column: PropTypes.string.isRequired,
  taskToEdit: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    priority: PropTypes.string,
    date: PropTypes.string
  })
};
