import React from 'react'
import FocusLock from 'react-focus-lock'

type DefaultDivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Modal = ({ children, ...props }: DefaultDivProps) => {
    return (
      <FocusLock returnFocus>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {children}
        </div>
      </FocusLock>
    )
  }