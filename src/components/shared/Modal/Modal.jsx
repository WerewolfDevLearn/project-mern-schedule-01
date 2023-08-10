import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalSTL from './Modal.module.css';

export default function Modal({ isOpen, onCloseModal, children }) {
  const portalElem = document.getElementById('modal');

  const overlayRef = useRef(null);

  const pressEscBtn = (event) => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };
  const onOverlayClick = (event) => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  useEffect(() => {
    overlayRef.current.focus();
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={ModalSTL.Overlay}
      onClick={onOverlayClick}
      onKeyDown={pressEscBtn}
      role="button"
      tabIndex={0}
      ref={overlayRef}
    >
      <div className={ModalSTL.Modal}>{children}</div>
    </div>,
    portalElem
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};
