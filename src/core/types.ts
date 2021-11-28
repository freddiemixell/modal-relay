export interface ModalRelayProps {
  children: JSX.Element | JSX.Element[]
  modalRoot: HTMLElement | null
}

export interface ModalStore {
  modals: string[]
  activate: (id: string) => void
  deactivate: (id: string) => void
}
