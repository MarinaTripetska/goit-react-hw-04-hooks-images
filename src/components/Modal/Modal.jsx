import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

import s from './Modal.module.css'

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

  return createPortal(
    <div
      className={s.overlay}
      onClick={e => {
        if (e.currentTarget === e.target) {
          onClose()
        }
      }}
    >
      <div className={s.modal}>{children}</div>
    </div>,
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
