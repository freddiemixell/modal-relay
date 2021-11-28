# Core

## useModalStore

This hook is a global store that allows you to add and remove modals from the `<ModalRelay/>` component. This is using the [zustand](https://github.com/pmndrs/zustand) library under the hood so it can be accessed from anywhere in your application. You can also pass a selector to `useModalStore` to optimize it for re-renders.

```jsx
// selector example
import { useModalStore } from "modal-relay";

const selector = state => state.activate;

export default function SomePage() {
    const activate = useModalStore(selector);

    return (
        <div>
            <button onClick={() => activate("settings")}>
        </div>
    );
}
```

## useEscapeHatch

This hook will allow you to pass your onClose handler to trigger on keyboard escape key press. If you're using the `<ModalMask/>` component you don't need to use that component will attach the listener for you. 

```jsx
import { useEscapeHatch, useModalStore } from "modal-relay";

function MyModal({id}) {
    const {deactivate} = useModalStore();
    const onClose = () => deactivate(id);

    useEscapeHatch(onClose);

    ...component stuff
}
```
