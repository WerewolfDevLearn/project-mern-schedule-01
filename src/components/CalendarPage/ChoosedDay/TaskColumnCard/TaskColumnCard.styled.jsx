import { colorText } from 'src/styles/variables/Variables';
import styled from 'styled-components';

export const TaskColumnCardStyles = styled.li`
  padding: 14px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tasksListBorder};

  &:last-child {
    margin-bottom: ${(props) => (props.taskscount > 2 ? '55px' : '14px')};

    @media screen and (width >= 768px) {
      margin-bottom: 0;
    }
  }
`;

export const TaskTitle = styled.h3`
  margin-bottom: 28px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const TaskCardWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const TaskCardInner = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;

export const OwnerAvatarOverlay = styled.div`
  display: inline-block;

  width: 32px;
  height: 32px;
  padding: 1px;
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.8px solid ${({ theme }) => theme.colors.accent};
`;

export const UserAvatar = styled.img``;

export const TaskPriority = styled.p`
  display: inline-block;

  padding: 4px 12px;
  border-radius: 4px;

  background-color: ${(props) =>
    props.priority === 'low' ? '#72C2F8' : props.priority === 'medium' ? '#F3B249' : '#EA3D65'};
  color: ${colorText.white};

  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;
