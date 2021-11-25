import React from 'react'
import ReactDOM from 'react-dom'
import { useModalStore } from '../core/store'
import { ModalRouterProps, ModalStore } from '../core/types'

const selector = (state: ModalStore) => state.modals

// This can be placed anywhere in app because it uses a portal.
export const ModalRouter = ({ children, modalRoot }: ModalRouterProps) => {
  const modals = useModalStore(selector)
  const filteredModals = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && modals.includes(child.props?.id)
  )

  // Destructure the first modal so we only ever show one at a time.
  const [firstModal = null] = filteredModals

  return modalRoot
    ? ReactDOM.createPortal(
        <React.Fragment>{firstModal}</React.Fragment>,
        modalRoot
      )
    : null
}
