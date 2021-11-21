import React from "react";
import ReactDOM from "react-dom";
import { useModalStore } from "../core/store";
import { ModalRouterProps } from "../core/types";

// This can be placed anywhere in app because it uses a portal.
export const ModalRouter = ({ children, modalRoot }: ModalRouterProps) => {
  let activeModal = null;
  let modals = useModalStore(React.useCallback((state) => state.modals, []));
  let toRender = React.Children.toArray(children).filter((child) => {
    if (React.isValidElement(child)) {
      return modals.includes(child.props?.id);
    }
    return false;
  });

  // Setting active modal in regular var to prevent extra rendering.
  if (toRender.length > 0) {
    activeModal = toRender[0];
  }

  return modalRoot
    ? ReactDOM.createPortal(<React.Fragment>{activeModal}</React.Fragment>, modalRoot)
    : null;
};
