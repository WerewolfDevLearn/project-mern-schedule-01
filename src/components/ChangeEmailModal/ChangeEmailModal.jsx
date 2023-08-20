import { useState } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/redux/selectors';
import Modal from 'src/components/shared/Modal/Modal';

import ChangeEmailForm from '../Forms/AccountForm/ChangeEmailForm/ChangeEmailForm';

import { ChangeValueBtn } from './ChangeEmailModal.styled';

export default function ChangeEmailModal({ callbackEmail }) {
  const { t } = useTranslation();
  //   const user = useUser();

  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);

  const openChangeEmailModal = () => {
    setShowChangeEmailModal(true);
  };

  const closeChangeEmailModal = () => {
    setShowChangeEmailModal(false);
  };

  return (
    <>
      {showChangeEmailModal && (
        <Modal isOpen={showChangeEmailModal} onClose={closeChangeEmailModal}>
          <ChangeEmailForm onClose={closeChangeEmailModal} callbackEmail={callbackEmail} />
        </Modal>
      )}
      <ChangeValueBtn type="button" onClick={openChangeEmailModal}>
        Change email
      </ChangeValueBtn>
    </>
  );
}

ChangeEmailModal.propTypes = {
  callbackEmail: PropTypes.func.isRequired
};
