import React from 'react'

import { ModalRelay } from 'modal-relay';
import SettingsModal, { SETTINGS_MODAL_ID } from './components/SettingsModal';
import SomePage from './components/SomePage';

const modalRoot = document.getElementById('modal-root');

const App = () => {

  return (
    <div>
      <SomePage/>
      <ModalRelay modalRoot={modalRoot}>
        <SettingsModal id={SETTINGS_MODAL_ID} />
      </ModalRelay>
    </div>
  )
}

export default App
