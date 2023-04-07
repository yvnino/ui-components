import { useCallback, useState } from 'react'

interface ModalHook {
  showModal: () => void
  hideModal: () => void
  isOpen: boolean
}

const useModal = (init?: boolean): ModalHook => {
  const [isOpen, setIsOpen] = useState<boolean>(!!init)

  const hideModal = useCallback(() => setIsOpen(false), [setIsOpen])

  const showModal = useCallback(() => setIsOpen(true), [setIsOpen])

  return {
    showModal,
    hideModal,
    isOpen
  }
}

export { useModal }
