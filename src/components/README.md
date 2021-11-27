# Components

## Modal
This is an A11y first modal. No stylesheet is included by this module so that you can fully utilize whatever system you're using. A full list of css classes can be seen below to style however you'd like.

**Props:**
- id: `String`
- children: `JSX.Element | JSX.Element[]`
- title: `String`
- description: `String`
- actions: `Array<{label: `String`, onClick: `Function`}>`

### Example

Styled Components
  ```jsx
    import styled from "styled-components";
    import { Modal, useModalStore } from "modal-relay";

    const StyledModal = styled.(Modal)`
        display: block;

        /* Inside the modal */
        .modal__window {
            display: inline-block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            border: 2px solid black;
            padding: 18px;
            z-index: 101;
        }


        /* Element Behind The Modal */
        .modal__mask {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 100;
        }
    `;

    type ModalSettingsProps = {
        id: string;
    }

    export default function SettingsModal(({id}): ModalSettingsProps) {
        let {deactivate} = useModalStore();
        const handleUpdate = () => {
            console.log('Updated Settings');
            deactivate(id);
        }
        return (
            <StyledModal
                id={id}
                title="Settings"
                description="Update your app settings."
                action=[
                    {
                        onClick: () => deactivate(id),
                        label: "Cancel"
                    },
                    {
                        onClick: handleUpdate,
                        label: "Update Settings"
                    }
                ]
            >
                <div>
                    <label htmlFor="dark-mode">Dark Mode</label>
                    <input id="dark-mode" type="checkbox"/>
                </div>
            </StyledModal>
        );
    }
  ```

## ModalRelay
This component holds and displays your modals whenever you call them with a `<ModalLink/>` or the `const {activate} = useModalStore()` activate hook. The ModalRelay component will also create a portal with the provided dom node so you can have a uniform location in the dom to display any type of overlay. The children of this component should be anything that you want to relay over your application. The only requirement is an ID prop set on each child. This allows full flexibility to relay any type of message with whatever style system you're using. Make sure you create a modal root element in your html template if you haven't already. This should ideally be above or below the react app root. You'll want to add something like this: `<div id="modal-root"></div>`

**Props:**
- modalRoot: `HTMLElement`
- children: `JSX.Element | JSX.Element[]`

### Example

```jsx
// app.js
import { ModalRelay } from "modal-relay";
import SettingsModal from "../path/to/your/modal/SettingsModal";

const modalRoot = document.getElementById("modal-root");

function Modals() {
    return (
        <ModalRelay modalRoot={modalRoot}>
            <SettingsModal id="settings"/>
        </ModalRelay>
    );
}

export default function App() {
  return (
    <>
        <div className="App">
            <h1>Hello world</h1>
            <h2>This is your app!</h2>
        </div>
        <Modals/>
    </>
  );
}
```

## ModalLink
This component can take any HTMLButtonElement props so you can adapt it to whatever style system you're using. Pass the open prop the id of the modal you want to open. From the example above you'll see we can open the settings modal with the example code below. 

**Props:**
- open: `String` the id of the the modal to open.
- children: `JSX.Element | JSX.Element[] | string`

### Example

```jsx
import { ModalLink } from "modal-relay";

export default function SomePage() {
    return (
        <div>
            <h1>Some page in your app</h1>
            <ModalLink open="settings">
                Edit Settings
            </ModalLink>
        </div>
    );
}
```