import React from 'react'

import { ModalRouter } from 'modal-relay';
import SettingsModal, { SETTINGS_MODAL_ID } from './components/SettingsModal';
import SomePage from './components/SomePage';

const modalRoot = document.getElementById('modal-root');

const App = () => {

  return (
    <div>
      <SomePage/>
      <ModalRouter modalRoot={modalRoot}>
        <SettingsModal id={SETTINGS_MODAL_ID} />
      </ModalRouter>
    </div>
  )
}

export default App
