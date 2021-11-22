import React from "react";
import FocusLock from "react-focus-lock";
import { ModalType, ModalStore } from "../core/types";
import { useModalStore } from "../core/store";

const dialogProps = {
  className: "modal",
  role: "dialog",
  "aria-modal": "true"
} as React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

// Placing outside of the component to avoid re-rendering.
const selector = (state: ModalStore) => state.deactivate;

// Since only one modal can be active at a time, we can use a single class for all modals.
const titleId = 'modal-title';
const descId = 'modal-desc';

export const Modal = ({
  id,
  children,
  title,
  description,
  actions = []
}: ModalType) => {
  let deactivate = useModalStore(selector);

  // Using useCallback because this is a dependency of useEffect which would cause re-rendering.
  const closeDialog = React.useCallback(() => deactivate(id), [id, deactivate]);

  if (title) {
    dialogProps["aria-labelledby"] = titleId;
  }

  if (description) {
    dialogProps["aria-describedby"] = descId;
  }

  // Allow users to close the modal with ESC key.
  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDialog();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [closeDialog]);

  return (
    <FocusLock returnFocus>
      <div
        {...dialogProps}
      >
        <div className="modal__window">
          {(title || description) && (
            <header className="modal__head">
              {title && <h2 id={titleId}>{title}</h2>}
              {description && <p id={descId}>{description}</p>}
            </header>
          )}
          <div className="modal__content">{children}</div>
          <footer className="modal__actions">
            {actions.length > 0
              ? actions.map((action) => (
                  <button
                    key={action.text}
                    className="button button--primary"
                    onClick={action.onClick}
                  >
                    {action.text}
                  </button>
                ))
              : null}
          </footer>
        </div>
        <div onClick={closeDialog} className="modal__mask"></div>
      </div>
    </FocusLock>
  );
};
