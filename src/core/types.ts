type ActionButton = { label: string; onClick: (e?: any) => void };

export interface ModalType {
  id: string;
  children: JSX.Element | JSX.Element[];
  title?: string;
  description?: string;
  actions?: ActionButton[];
}

export interface ModalRouterProps {
  children: JSX.Element | JSX.Element[];
  modalRoot: HTMLElement | null;
}

export interface ModalStore {
  modals: string[];
  activate: (id: string) => void;
  deactivate: (id: string) => void;
}
