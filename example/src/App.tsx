import React from 'react'

import { ModalRelay } from 'modal-relay';
import SettingsModal, { SETTINGS_MODAL_ID } from './components/Modals/SettingsModal';
import SomePage from './components/SomePage';
import { EditProfileModal, EDIT_PROFILE_ID } from './components/Modals/EditProfileModal';

const modalRoot = document.getElementById('modal-root');

const App = () => {

  return (
    <div>
      <SomePage/>
      <ModalRelay modalRoot={modalRoot}>
        <SettingsModal id={SETTINGS_MODAL_ID} />
        <EditProfileModal id={EDIT_PROFILE_ID} />
      </ModalRelay>
    </div>
  )
}

export default App
