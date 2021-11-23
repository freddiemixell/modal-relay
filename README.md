# Modal Relay

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/modal-relay.svg)](https://www.npmjs.com/package/modal-relay)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Size](https://img.shields.io/bundlephobia/minzip/modal-relay?label=bundle%20size&style=flat&colorA=000000&colorB=000000)](https://bundlephobia.com/result?p=modal-relay)

## Install (PRE-RELEASE Not Available)
NPM:
```bash
npm install --save modal-relay
```
YARN:
```bash
yarn add modal-relay
```

## Usage
Add the `<ModalRouter/>` to your app and pass your modals. You can use the built in modal or pass your own. **Make sure you set the ID for each modal on the components that are being passed to the router.**
 
```tsx
import React from 'react'
import { ModalRouter, Modal, useModalStore } from 'modal-relay';

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
              label: 'Close',
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

## Opening Modals From Anywhere
You can open a modal from anywhere by using the `<ModalLink/>` component.

```tsx
import React from 'react';
import { ModalLink } from 'modal-relay';

// You can use any HTMLButtonElement props with the <ModalLink/> component.
const buttonStyle = {backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5em', padding: '10px 10px', fontWeight: 'bold'}

const SomePage = () => {
    return (
        <div>
            <header>
                <h1>Some Page</h1>
            </header>
            <main>
                <section>
                    <p>Some content</p>
                    <ModalLink open="settings" style={buttonStyle}>
                        Edit Settings
                    </ModalLink>
                </section>
            </main>
        </div>
    );
}

export default SomePage;
```

## Common Mistakes
There are two ways that you could mess this up right out of the box.

1. You didn't create a portal element:
  - You'll need access to the HTML markup where your React app is being rendered. If you're using something like Create React App that will be the `index.html` located within your `./public` folder. If you're not using CRA you will likely have to figure out how to modify the HTML template created by your build system. Most frameworks provide documentation about how to do this but if you're confused just open an issue! :)
2. No ID Set At Modal Router Level:
  - I think this is better to show an example of what works and what doesn't:

##### Works
```tsx
<ModalRouter modalRoot={modalRoot}>
  <YourCustomModal id="custom-modal-one"/>
  <YourOtherModal id="other-modal"/>
</ModalRouter>
```

##### Doesn't Work
```tsx
<ModalRouter modalRoot={modalRoot}>
  <YourCustomModal/>
  <YourOtherModal/>
</ModalRouter>
```
Even if you pass an ID to the `<Modal/>` component within your custom modal, the `<ModalRouter/>` won't be able to detect it. A good rule of thumb is to create your ID as a variable and export it from your custom modal. Then when you want to activate that modal you just import that variable and pass it to `activate()` or `<ModalLink/>`.

## License

MIT © [freddiemixell](https://github.com/freddiemixell)
