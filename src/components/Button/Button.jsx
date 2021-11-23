import PropTypes from 'prop-types'
import classNames from 'classnames'

import s from './Button.module.css'

function Button({ className, onClick, children, ...attrs }) {
  const classes = classNames(s.Button, className)

  return (
    <button {...attrs} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => null,
  children: null,
  className: null,
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}

export { Button }
