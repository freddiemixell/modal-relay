export interface ModalRelayProps {
  children: JSX.Element | JSX.Element[];
  modalRoot: HTMLElement | null;
}

export interface ModalStore {
  modals: string[];
  activate: (id: string) => void;
  deactivate: (id: string) => void;
}

export type DefaultDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DefaultButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
