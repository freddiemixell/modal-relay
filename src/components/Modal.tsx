import React from "react";
import FocusLock from "react-focus-lock";
import uniqid from "uniqid";
import { ModalType } from "../core/types";
import { useModalStore } from "../core/store";

export const Modal = ({
  id,
  children,
  title,
  description,
  actions = []
}: ModalType) => {
  let { deactivate } = useModalStore(
    React.useCallback(
      (state) => ({ deactivate: state.deactivate }),
      []
    )
  );
  const titleIdRef = React.useRef(uniqid("title-"));
  const descIdRef = React.useRef(uniqid("desc-"));

  const closeDialog = React.useCallback(() => deactivate(id), [id, deactivate]);

  const dialogProps = {
    className: "modal",
    role: "dialog",
    "aria-modal": "true"
  } as React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;

  if (title) {
    dialogProps["aria-labelledby"] = titleIdRef.current;
  }

  if (description) {
    dialogProps["aria-describedby"] = descIdRef.current;
  }

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
              {title && <h2 id={titleIdRef.current}>{title}</h2>}
              {description && <p id={descIdRef.current}>{description}</p>}
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
