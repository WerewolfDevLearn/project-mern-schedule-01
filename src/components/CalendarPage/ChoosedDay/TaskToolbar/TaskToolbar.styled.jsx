import styled from 'styled-components';
import { Menu } from '@mui/material';

export const TaskToolbarStyles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const TaskToolbarBtn = styled.button`
  width: 14px;
  height: 14px;
`;

export const RelocateMenu = styled(Menu)`
  /* position: absolute !important;
  top: 0;
  left: 0;

  width: 115px;
  height: 70px; */
`;
