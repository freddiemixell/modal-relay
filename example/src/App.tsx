import React from 'react'

import { ModalRouter, Modal, useModalStore } from 'modal-router';

const modalRoot = document.getElementById('modal-root');

const App = () => {
  const {activate, deactivate} = useModalStore();

  return (
    <div>
      <button onClick={() => activate('settings')}>Edit Settings</button>
      <ModalRouter modalRoot={modalRoot}>
        <Modal
          id="settings"
          title="Settings"
          actions={[
            {
              text: 'Close',
              onClick: () => deactivate('settings')
            }
          ]}
        >
          <h1>Settings</h1>
        </Modal>
      </ModalRouter>
    </div>
  )
}

export default App
