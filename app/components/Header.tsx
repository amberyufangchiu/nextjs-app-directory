import React from 'react'
import './header.scss'

interface HeaderProps {
    color?: string
}

const Header = (props: HeaderProps):JSX.Element => {
  return (
    <div className='header'>
      <a>HOME</a>
      <a>WORK</a>
      <a>ABOUT</a>
      <a>CONTACT</a>
    </div>
  )
}

export default Header