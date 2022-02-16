import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './Dialog.scss'

const dialogRoot = document.getElementById('dialog-root')

const Dialog = ({ open, toggle, children, ...props }) => {
  return open
    ? ReactDOM.createPortal(
        <>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <div className={`dialog-content ${props.className}`}>
              {children}
            </div>
          </div>
          <div className="dialog-backdrop" onClick={() => toggle()}></div>
        </>,
        dialogRoot
      )
    : null
}

export default Dialog
