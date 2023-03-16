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

  const handleClicked = () => {
    setMenuToggle(false)
  }

  const menu = [
    {id:'01',page:'Home', href: '/'},
    {id:'02',page:'Work', href: '/work'},
    {id:'03',page:'About', href: '/about'},
    {id:'04',page:'Contact', href: '/contact'}
  ]

  return (
    <div className={classes}>
      <h1>
        {'\u003c'} AmberDev {'\u002f\u003e'}
      </h1>
      <ul>
        {menu.map((item)=>{
          return(
            <li key={item.id}>
              <Link href={item.href} onClick={() => handleClicked()}>
                <span>{item.id}</span> {item.page}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Menu
