import React from 'react'
import './nav.scss'

interface HeaderProps {
  color?: string
}

const Nav = (props: HeaderProps): JSX.Element => {
  return (
    <div className='nav'>
      <a>HOME</a>
      <a>WORK</a>
      <a>ABOUT</a>
      <a>CONTACT</a>
    </div>
  )
}

export default Nav
