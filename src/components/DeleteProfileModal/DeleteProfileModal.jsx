import { useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/redux/selectors';
import Modal from 'src/components/shared/Modal/Modal';
import DeleteProfileForm from '../Forms/DeleteProfileForm/DeleteProfileForm';

import { DeleteProfileBtn } from './DeleteProfileModal.styled';

export default function DeleteProfileModal() {
  const { t } = useTranslation();
  //   const user = useUser();

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
          {<DeleteProfileForm onClose={closeDeleteProfileModal} />}
        </Modal>
      )}
      <DeleteProfileBtn type="button" onClick={openDeleteProfileModal}>
        Delete profile
      </DeleteProfileBtn>
    </>
  );
}
