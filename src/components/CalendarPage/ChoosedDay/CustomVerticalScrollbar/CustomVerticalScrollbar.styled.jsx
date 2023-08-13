import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Scrollbar = styled(SimpleBar)`
  height: fit-content;
  max-height: 352px;

  .simplebar-track {
    right: -12px;

    width: 6px;
    border-radius: 12px;
    padding: 0;

    background-color: #f2f2f2;

    @media screen and (width >= 768px) {
      right: -14px;

      width: 8px;
    }
  }

  .simplebar-scrollbar {
    width: 6px;
    border-radius: 12px;

    background-color: #e7e5e5;

    @media screen and (width >= 768px) {
      width: 8px;
    }
  }

  .simplebar-scrollbar::before {
    background-color: #e7e5e5;
  }
`;
