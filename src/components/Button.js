import classNames from 'classnames'
import React from 'react'

export default function Button({ children, className = null, ...props }) {
  const classes = classNames(
    'relative',
    'bg-orange-500',
    'text-white text-xl',
    'font-bold',
    'rounded-2xl',
    'drop-shadow-xl',
    'py-2 px-8',
    'uppercase',
    'btn',
    className && className
  )

  return (
    <button {...props} className={classes}>
      {children}
      <span className='absolute bg-white rounded-full w-3 h-[4px] top-1 left-2 -rotate-12 opacity-80'></span>
      <span className='absolute bg-white rounded-full w-1 h-[3px] top-2 left-1 -rotate-12 opacity-80'></span>
    </button>
  )
}
