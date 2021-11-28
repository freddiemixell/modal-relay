import React from 'react';
import FocusLock from 'react-focus-lock';
import { DefaultDivProps } from '../core/types';

export const Modal = ({ children, ...props }: DefaultDivProps) => {
  return (
    <FocusLock returnFocus>
      <div className="modal" role="dialog" aria-modal="true" {...props}>
        {children}
      </div>
    </FocusLock>
  );
};
