import * as React from 'react';
import { DefaultDivProps } from '../core/types';

type ModalWindowProps = { tailwind?: boolean } & DefaultDivProps;

const TAILWIND_WINDOW_DEFAULT =
  'bg-white rounded-lg w-1/2 inline-block fixed left-2/4 top-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2';

export const ModalWindow = ({
  className,
  children,
  ...props
}: ModalWindowProps) => {
  if (props.tailwind) {
    className += ' ' + TAILWIND_WINDOW_DEFAULT;
  }
  return (
    <div className={`modal__window ${className}`} {...props}>
      {children}
    </div>
  );
};
