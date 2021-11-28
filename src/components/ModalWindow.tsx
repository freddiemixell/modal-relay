import * as React from 'react';
import { DefaultDivProps } from '../core/types';

export const ModalWindow = ({
  className,
  children,
  ...props
}: DefaultDivProps) => {
  return (
    <div className={`modal__window ${className}`} {...props}>
      {children}
    </div>
  );
};
