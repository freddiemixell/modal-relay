import React from 'react';
import FocusLock from 'react-focus-lock';
import { DefaultDivProps, FocusLockProps } from '../core/types';

type ModalProps = {focusLockProps?: FocusLockProps} & DefaultDivProps;

const defaultFocusProps: FocusLockProps = {
  returnFocus: true,
};

export const Modal = ({
  children,
  focusLockProps = defaultFocusProps,
  ...props
}: ModalProps) => {
  return (
    <FocusLock {...focusLockProps}>
      <div className="modal" role="dialog" aria-modal="true" {...props}>
        {children}
      </div>
    </FocusLock>
  );
};
