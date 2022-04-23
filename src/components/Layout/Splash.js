import React from 'react'
import Button from '../Button'

export default function Splash() {
  return (
    <div className='h-full w-full flex items-center justify-center bg-splash-screen bg-cover flex-col'>
      <img src='/images/logo.png' alt='Jogo da Vida' className='mb-8' />
      <Button>Jogar</Button>
    </div>
  )
}
