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
