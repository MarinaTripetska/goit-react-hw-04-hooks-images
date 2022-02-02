import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow } from './Modal.styled'

const modalRoot = document.getElementById('modal-portal')

export default function Modal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose()
    }
  }
  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    modalRoot,
  )
}

Modal.defaultProps = {
  onClose: () => {},
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
}
