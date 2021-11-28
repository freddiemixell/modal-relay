import { ModalRelay } from './components/ModalRelay'
import { ModalLink } from './components/ModalLink'
import { Modal } from './components/Modal'
import { ModalMask } from './components/ModalMask'
import { ModalWindow } from './components/ModalWindow'
import { CloseIcon } from './components/CloseIcon'
import { useModalStore } from './core/store'
import { useEscapeHatch } from './core/helpers'
import { ModalStore as MStore } from './core/types'

// Types
export type ModalStore = MStore

export {
  ModalMask,
  Modal,
  ModalWindow,
  CloseIcon,
  ModalRelay,
  ModalLink,
  useModalStore,
  useEscapeHatch,
}
