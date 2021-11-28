import React from 'react';
import { useModalStore } from '../core/store';
import { ModalStore, DefaultButtonProps } from '../core/types';

type ModalLinkProps = {
  children: JSX.Element | JSX.Element[] | string;
  open: string;
} & DefaultButtonProps;

const selector = (state: ModalStore) => state.activate;

export const ModalLink = ({ children, open, ...props }: ModalLinkProps) => {
  const activate = useModalStore(selector);
  return (
    <button type="button" onClick={() => activate(open)} {...props}>
      {children}
    </button>
  );
};
