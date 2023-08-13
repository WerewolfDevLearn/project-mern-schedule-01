import { AddFeedbackBtnStyles } from '../AddFeedbackBtn/AddFeedbackBtn.styled';

export default function AddFeedbackBt({ openModal }) {
  return <AddFeedbackBtnStyles onClick={openModal}>Feedback</AddFeedbackBtnStyles>;
}
