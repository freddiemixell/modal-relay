import * as React from 'react';
import { DefaultDivProps } from '../core/types';
import { useEscapeHatch } from '../core/helpers';

type ModalMaskProps = {
  onClose: () => void;
} & DefaultDivProps;

export const ModalMask = ({
  onClose,
  className = '',
  ...props
}: ModalMaskProps) => {
  useEscapeHatch(onClose);
  return (
    <div onClick={onClose} className={`modal__mask ${className}`} {...props} />
  );
};
