import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useError, useisLoading } from 'src/redux/selectors';

import Modal from 'src/components/shared/Modal/Modal';

import ChangeEmailForm from '../Forms/AccountForm/ChangeEmailForm/ChangeEmailForm';
import ChangeEmailVerifyForm from '../Forms/AccountForm/ChangeEmailVerifyForm/ChangeEmailVerifyForm';

import { ChangeValueBtn } from './ChangeEmailModal.styled';

export default function ChangeEmailModal() {
  const isLoading = useisLoading();
  const error = useError();
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showChangeEmailVerifyModal, setShowChangeEmailVerifyModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const { t } = useTranslation();

  const openBackdrop = () => {
    setBackdrop(true);
    setShowChangeEmailModal(true);
  };
  const openChangeEmailVerifyModal = () => {
    setShowChangeEmailVerifyModal(true);
    setShowChangeEmailModal(false);
  };

  return (
    <>
      {backdrop && (
        <Modal onClose={() => setBackdrop(false)}>
          {showChangeEmailModal && (
            <ChangeEmailForm
              onClose={() => setBackdrop(false)}
              openChangeEmailVerifyModal={openChangeEmailVerifyModal}
            />
          )}
          {!isLoading && !error && showChangeEmailVerifyModal && !showChangeEmailModal && (
            <ChangeEmailVerifyForm onClose={() => setBackdrop(false)} />
          )}
        </Modal>
      )}

      <ChangeValueBtn type="button" onClick={openBackdrop}>
        {t('ChangeEmail')}
      </ChangeValueBtn>
    </>
  );
}
