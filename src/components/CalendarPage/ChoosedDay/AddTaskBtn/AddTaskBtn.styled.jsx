import styled from 'styled-components';

export const AddTaskBtnStyles = styled.button`
  ${(props) => (props.taskscount > 2 ? 'position: absolute;' : 'position: static;')};
  bottom: 10px;

  width: 100%;
  max-width: 299px;
  padding: 12px;
  border-radius: 8px;
  border: 1px dashed #3e85f3;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background: #e3f3ff;

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    max-width: 304px;
    position: static;
    margin-top: 32px;
  }
`;

export const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;
