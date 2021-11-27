import React from 'react'
import FocusLock from 'react-focus-lock'
import { ModalType, ModalStore, ActionButton } from '../core/types'
import { useModalStore } from '../core/store'

export { FocusLock }

type DefaultDialogProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type DefaultDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const dialogProps = {
  className: 'modal',
  role: 'dialog',
  'aria-modal': 'true'
} as DefaultDialogProps

// Placing outside of the component to avoid re-rendering.
const selector = (state: ModalStore) => state.deactivate

// Since only one modal can be active at a time, we can use a single ID for all modals.
const titleId = 'modal-title'
const descId = 'modal-desc'

export const Modal = ({
  id,
  children,
  title,
  description,
  actions = []
}: ModalType) => {
  const deactivate = useModalStore(selector)

  // Using useCallback because this is a dependency of useEffect which would cause re-rendering.
  const closeDialog = React.useCallback(() => deactivate(id), [])

  if (title) {
    dialogProps['aria-labelledby'] = titleId
  }

  if (description) {
    dialogProps['aria-describedby'] = descId
  }

  // Allow users to close the modal with ESC key.
  React.useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDialog()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [closeDialog])

  return (
    <FocusLock returnFocus>
      <Dialog>
        <ModalWindow>
          <ModalHeader>
            {title && <h2 id={titleId}>{title}</h2>}
            {description && <p id={descId}>{description}</p>}
            <button onClick={() => deactivate(id)}>x</button>
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          <Actions actions={actions} />
        </ModalWindow>
        <ModalMask onClose={closeDialog} />
      </Dialog>
    </FocusLock>
  )
}

export const Dialog = ({ children, ...props }: DefaultDialogProps) => {
  return (
    <div {...dialogProps} {...props}>
      {children}
    </div>
  )
}

type ModalWindowProps = DefaultDivProps

export const ModalWindow = ({ children, ...props }: ModalWindowProps) => {
  return (
    <div className='modal__window' {...props}>
      {children}
    </div>
  )
}

type ModalContentProps = DefaultDivProps

export const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return (
    <div className='modal__content' {...props}>
      {children}
    </div>
  )
}

type ModalMaskProps = { onClose: () => void }

export const ModalMask = ({
  onClose,
  ...props
}: ModalMaskProps & DefaultDivProps) => {
  return <div onClick={onClose} className='modal__mask' {...props} />
}

type ModalHeaderProps = DefaultDivProps

export const ModalHeader = ({ children, ...props }: ModalHeaderProps) => {
  return (
    <header className='modal__head' {...props}>
      {children}
    </header>
  )
}

type ActionsProps = { actions: ActionButton[] }

export const Actions = ({
  actions,
  ...props
}: ActionsProps & DefaultDivProps) => {
  if (actions.length === 0) {
    return null
  }
  return (
    <footer className='modal__actions' {...props}>
      {actions.map((action) => (
        <button
          key={action.label}
          className='button button--primary'
          onClick={action.onClick}
        >
          {action.label}
        </button>
      ))}
    </footer>
  )
}
