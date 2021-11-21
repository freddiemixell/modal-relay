# modal-router

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/modal-router.svg)](https://www.npmjs.com/package/modal-router) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-router
```

## Usage

```tsx
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
```

## License

MIT © [freddiemixell](https://github.com/freddiemixell)
