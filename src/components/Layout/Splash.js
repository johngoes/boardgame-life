import React from 'react'
import { useRecoilState } from 'recoil'
import { matchState } from '../../atoms/match'
import Button from '../Button'
import {createRandomId} from '../../lib/utils'
import { useNavigate } from 'react-router-dom'

export default function Splash() {
  const [match, setMatch] = useRecoilState(matchState)
  const navigate = useNavigate()
  
  const handleNewGame = () => {
    setMatch({
      key: createRandomId(10)
    })
    navigate('/players')
  }

  return (
    <div className='h-full w-full flex items-center justify-center bg-splash-screen bg-cover flex-col'>
      <img src='/images/logo.png' alt='Jogo da Vida' className='mb-8 w-64' />
      <Button onClick={handleNewGame}>Novo Jogo</Button>
      {match && <Button>Continuar</Button>}
    </div>
  )
}
