import { useState } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useUser, useError, useisLoading } from 'src/redux/selectors';
import Modal from 'src/components/shared/Modal/Modal';

import ChangeEmailForm from '../Forms/AccountForm/ChangeEmailForm/ChangeEmailForm';
import ChangeEmailVerifyForm from '../Forms/AccountForm/ChangeEmailVerifyForm/ChangeEmailVerifyForm';

import { ChangeValueBtn } from './ChangeEmailModal.styled';

export default function ChangeEmailModal() {
  const { t } = useTranslation();
  //   const user = useUser();
  const isLoading = useisLoading();
  const error = useError();
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showChangeEmailVerifyModal, setShowChangeEmailVerifyModal] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  // const [isUpdating, setisUpdating] = useState(false);

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
          {/* {error && setBackdrop(false)} */}
        </Modal>
      )}

      <ChangeValueBtn type="button" onClick={openBackdrop}>
        Change email
      </ChangeValueBtn>
    </>
  );
}
