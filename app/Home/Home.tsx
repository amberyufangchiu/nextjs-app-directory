import React, { useContext } from 'react'
import { CursorContentType, CursorContext } from './cursor/CursorManager'
import './home.scss'

const Home = () => {
  const { setSize } = useContext<CursorContentType>(CursorContext)

  return (
    <div className='home'>
      <h2>Hello, nihao!</h2>
      <h1>I am Yu Fang Chiu</h1>
      <h1>But you can call me Amber</h1>
      <h2>I am a software engineer</h2>
    </div>
  )
}

export default Home
