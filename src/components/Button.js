import classNames from 'classnames'
import React from 'react'

export default function Button({ children, className = null, ...props }) {
  const classes = classNames(
    'bg-orange-500',
    'text-white',
    'font-bold',
    'rounded-lg',
    'drop-shadow-xl',
    'py-2 px-8',
    className && className
  )
  return (
    <button {...props} className={classes}>{children}</button>
  )
}
