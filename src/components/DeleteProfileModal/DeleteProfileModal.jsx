import { useState } from 'react';
import { useDispatch } from 'react-redux';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import Modal from 'src/components/shared/Modal/Modal';

import DeleteProfileForm from '../Forms/AccountForm/DeleteProfileForm/DeleteProfileForm';

import { DeleteProfileBtn } from './DeleteProfileModal.styled';

export default function DeleteProfileModal() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    // dispatch(updUser(data));
  };
  const { t } = useTranslation();

  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);

  const openDeleteProfileModal = () => {
    setShowDeleteProfileModal(true);
  };

  const closeDeleteProfileModal = () => {
    setShowDeleteProfileModal(false);
  };

  return (
    <>
      {showDeleteProfileModal && (
        <Modal isOpen={showDeleteProfileModal} onClose={closeDeleteProfileModal}>
          {<DeleteProfileForm onClose={closeDeleteProfileModal} callBack={callBack} />}
        </Modal>
      )}
      <DeleteProfileBtn type="button" onClick={openDeleteProfileModal}>
        Delete profile
      </DeleteProfileBtn>
    </>
  );
}
