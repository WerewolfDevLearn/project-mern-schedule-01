import { useState } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/redux/selectors';
import Modal from 'src/components/shared/Modal/Modal';

import ChangeEmailForm from '../Forms/AccountForm/ChangeEmailForm/ChangeEmailForm';
import ChangeEmailVerifyForm from '../Forms/AccountForm/ChangeEmailVerifyForm/ChangeEmailVerifyForm';

import { ChangeValueBtn } from './ChangeEmailModal.styled';

export default function ChangeEmailModal({ callbackEmail }) {
  const { t } = useTranslation();
  //   const user = useUser();

  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showChangeEmailVerifyModal, setShowChangeEmailVerifyModal] = useState(false);
  // const [isUpdating, setisUpdating] = useState(false);
  console.log(showChangeEmailModal);
  console.log(showChangeEmailVerifyModal);

  const openChangeEmailModal = () => {
    setShowChangeEmailModal(true);
  };

  const closeChangeEmailModal = () => {
    setShowChangeEmailModal(false);
  };

  const openChangeEmailVerifyModal = () => {
    setShowChangeEmailVerifyModal(true);
  };

  const closeChangeEmailVerifyModal = () => {
    setShowChangeEmailVerifyModal(false);
  };

  return (
    <>
      {showChangeEmailModal && (
        <Modal isOpen={showChangeEmailModal} onClose={closeChangeEmailModal}>
          <ChangeEmailForm
            onClose={closeChangeEmailModal}
            callbackEmail={callbackEmail}
            openChangeEmailVerifyModal={openChangeEmailVerifyModal}
          />
        </Modal>
      )}
      <ChangeValueBtn type="button" onClick={openChangeEmailModal}>
        {t('ChangeEmail')}
      </ChangeValueBtn>
      {showChangeEmailVerifyModal && (
        <Modal isOpen={showChangeEmailVerifyModal} onClose={closeChangeEmailVerifyModal}>
          <ChangeEmailVerifyForm
            onClose={closeChangeEmailVerifyModal}
            closeChangeEmailVerifyModal={closeChangeEmailVerifyModal}
          />
        </Modal>
      )}
    </>
  );
}

ChangeEmailModal.propTypes = {
  callbackEmail: PropTypes.func.isRequired
};
