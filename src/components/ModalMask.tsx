import * as React from 'react';
import { DefaultDivProps } from '../core/types';

type ModalMaskProps = {
  onClose: () => void;
  tailwind?: boolean;
} & DefaultDivProps;

const TAILWIND_MASK_DEFAULT =
  'fixed top-0 left-0 h-full w-full z-40 bg-gray-800 bg-opacity-95';

export const ModalMask = ({
  onClose,
  className = '',
  ...props
}: ModalMaskProps) => {
  if (props.tailwind) {
    className += ' ' + TAILWIND_MASK_DEFAULT;
  }
  return (
    <div onClick={onClose} className={`modal__mask ${className}`} {...props} />
  );
};
