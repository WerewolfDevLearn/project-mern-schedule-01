import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalDiv, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal');

export default function Modal({ onClose, color, clickable, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const closeModalByEsc = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeModalByEsc);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (clickable) {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }
  };

  return createPortal(
    <Overlay
      onClick={handleOverlayClick}
      $background={color}
      initial={{
        backdropFilter: 'blur(0px)'
      }}
      animate={{ backdropFilter: 'blur(3px)' }}
      exit={{
        backdropFilter: 'blur(0px)'
      }}
      transition={{
        duration: 0.11
      }}
    >
      <ModalDiv
        initial={{
          scale: 0
        }}
        animate={{ scale: 1 }}
        exit={{
          scale: 0
        }}
        transition={{
          duration: 0.11
        }}
      >
        {children}
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  color: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
