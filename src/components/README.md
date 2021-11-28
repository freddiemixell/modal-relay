# Components

## Modal
This is the basic building block of an accessible modal element. By default it includes all props you'll need for a11y support except for `aria-labelledby` and `aria-describedby`. All modals should be built with this as the outer wrapper.

- A11y First
- Built with `<FocusLock/>` from [react-focus-lock](https://github.com/theKashey/react-focus-lock)
- Automatically returns focus to activating element when the modal is closed.

**Props:**

- `HTMLDivElement` props.
- `aria-labelledby` String - this is the id for the title element.
- `aria-describedby` String - this is the id for the content element.

### Example

```jsx
<Modal
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
... your component
</Modal>
```

## ModalWindow
This is a helper simply to describe the basic building blocks all modals should follow in this system. Also includes a default class of `modal__window` for styling.

**Props:**

- `HTMLDivElement` props.

### Example

```jsx
<Modal
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <ModalWindow>
  ... your component
  </ModalWindow>
</Modal>
```

## ModalMask
This is another building block component that all modals should utilize by default. If you don't use this component you should create one in your system. Having a background that allows users to exit on click is essential to usability with your modals.

By default this modal mask will allow users to click outside of the modal to exit with its `onClose` prop. This same `onClose` prop will be used to listen for the `Escape` key press. When that happens it will automatically run the `onClose` logic.

**Props:**

- `HTMLDivElement` props.
- `onClose` () => void The method to run on modal close.

### Example

```jsx
<Modal>
  <ModalWindow>
  ... your component
  </ModalWindow>
  <ModalMask onClose={handleClose} />
</Modal>
```

## CloseIcon
This is yet another building block component that is met more or less as an example of how you should create your close Icon. That doesn't mean you shouldn't use it because this is the a11y friendly way to create a close icon.

- Adds proper aria close label.
- Wrapped with a button so it's available for tab navigation.

**Props:**

- `HTMLDivElement` props.
- `onClose`: Function
- `svgClassName`: String (Optional)
- `svgViewBox`: String (Optional)

### Example

```jsx
<CloseIcon
  className="ml-auto"
  onClose={handleClose}
/>
```

## ModalRelay

This component holds and displays your modals whenever you call them with a `<ModalLink/>` or the `const {activate} = useModalStore()` activate hook. The ModalRelay component will also create a portal with the provided dom node so you can have a uniform location in the dom to display any type of overlay. The children of this component should be anything that you want to relay over your application. The only requirement is an ID prop set on each child. This allows full flexibility to relay any type of message with whatever style system you're using. Make sure you create a modal root element in your html template if you haven't already. This should ideally be above or below the react app root. You'll want to add something like this: `<div id="modal-root"></div>`

**Props:**

- modalRoot: `HTMLElement`
- children: `JSX.Element | JSX.Element[]`

### Example

```jsx
// app.js
import { ModalRelay } from 'modal-relay';
import SettingsModal from '../path/to/your/modal/SettingsModal';

const modalRoot = document.getElementById('modal-root');

function Modals() {
  return (
    <ModalRelay modalRoot={modalRoot}>
      <SettingsModal id="settings" />
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
      <Modals />
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
import { ModalLink } from 'modal-relay';

export default function SomePage() {
  return (
    <div>
      <h1>Some page in your app</h1>
      <ModalLink open="settings">Edit Settings</ModalLink>
    </div>
  );
}
```
