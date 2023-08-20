import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

export const Scrollbar = styled(SimpleBar)`
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  .simplebar-content-wrapper {
    scroll-snap-type: x mandatory;
  }

  .simplebar-track.simplebar-horizontal {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;

    width: auto;
    height: 12px;
    border-radius: 12px;

    background: ${({ theme }) => theme.colors.lineHorizontScroll};

    transform: scale(1);

    @media screen and (width >= 768px) {
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

    background: ${({ theme }) => theme.colors.scrollSwitchHorizont};

    transform: scale(1);

    @media screen and (width >= 768px) {
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

    background: ${({ theme }) => theme.colors.scrollSwitchHorizont};
    opacity: 1;

    @media screen and (width >= 768px) {
      height: 14px;
    }
  }
`;
