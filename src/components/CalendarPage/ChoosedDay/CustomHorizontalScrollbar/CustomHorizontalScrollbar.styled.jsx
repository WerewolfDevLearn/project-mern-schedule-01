import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Scrollbar = styled(SimpleBar)`
  overflow-y: hidden;

  .simplebar-track.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background-color: #f2f2f2;

    transform: scale(1);

    @media screen and (min-width: 768px) {
      height: 14px;
      left: 30px;
      right: 30px;
    }
  }

  .simplebar-scrollbar.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background-color: #e7e5e5;

    transform: scale(1);

    @media screen and (min-width: 768px) {
      left: 30px;
      right: 30px;
      height: 14px;
    }
  }

  .simplebar-scrollbar::before {
    top: 0;
    left: 0;
    right: 0;
    transform: scale(1);

    width: auto;
    height: 12px;

    background-color: #e7e5e5;
    opacity: 1;

    @media screen and (min-width: 768px) {
      height: 14px;
    }
  }
`;
