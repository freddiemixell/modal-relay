import React from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from "react-remove-scroll";
import { DefaultDivProps } from '../core/types';

export const Modal = ({ children, ...props }: DefaultDivProps) => {
  return (
    <FocusLock returnFocus autoFocus>
      <RemoveScroll allowPinchZoom={false}>
        <div className="modal" role="dialog" aria-modal="true" {...props}>
          {children}
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};
