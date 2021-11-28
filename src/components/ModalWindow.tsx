import * as React from 'react';
import { DefaultDivProps } from '../core/types';

type ModalWindowProps = { tailwind?: boolean } & DefaultDivProps;

const TAILWIND_WINDOW_DEFAULT =
  'bg-white rounded-lg w-1/2 inline-block fixed left-2/4 top-1/2 z-50';

export const ModalWindow = ({
  className,
  style,
  children,
  ...props
}: ModalWindowProps) => {
  if (props.tailwind) {
    className += ' ' + TAILWIND_WINDOW_DEFAULT;
    style = { ...style, ...{ transform: 'translate(-50%, -50%)' } };
  }
  return (
    <div className={`modal__window ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};
