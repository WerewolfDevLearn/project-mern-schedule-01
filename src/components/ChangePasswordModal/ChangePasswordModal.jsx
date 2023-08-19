import { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Modal from 'src/components/shared/Modal/Modal';

import ChangePasswordForm from '../Forms/ChangePasswordForm/ChangePasswordForm';

import { ChangeValueBtn } from './ChangePasswordModal.styled';

export default function ChangeEmailModal() {
  const { t } = useTranslation();

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const openChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const closeChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  return (
    <>
      {showChangePasswordModal && (
        <Modal isOpen={showChangePasswordModal} onClose={closeChangePasswordModal}>
          {<ChangePasswordForm onClose={closeChangePasswordModal} />}
        </Modal>
      )}
      <ChangeValueBtn type="button" onClick={openChangePasswordModal}>
        Change password
      </ChangeValueBtn>
    </>
  );
}
