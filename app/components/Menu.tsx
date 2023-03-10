import React from 'react'
import './menu.scss'
import Link from 'next/link'

interface HeaderProps {
  menuToggle: boolean
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: HeaderProps): JSX.Element => {
  const { menuToggle, setMenuToggle } = props
  const classes = menuToggle ? 'menu active' : 'menu'

  return (
    <div className={classes}>
      <h1>
        {'\u003c'} AmberDev {'\u002f\u003e'}
      </h1>
      <ul>
        <li>
          <div onClick={() => setMenuToggle(false)}>
            <span>01</span> Home
          </div>
        </li>
        <li>
          <Link href='/'>
            <span>02</span> Work
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <span>03</span> About
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <span>04</span> Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
