'use client'
import { useState, useRef, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/index.scss'
import Menu from '@/app/components/Menu'
import Header from '@/app/components/Header'
import PrelodingPage from '@/app/components/Preloading'
import Cursor from '@/app/components/cursor/CustomCursor'
import CursorManager from '@/app/components/cursor/CursorManager'

export default function Layout() {
  const [preloading, setPreloading] = useState<boolean>(true)
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null)
  const clear = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout)
  }

  useEffect(() => {
    const id = setInterval(() => {
      setPreloading(false)
    }, 3000)
    intervalRef.current = id
  }, [])

  useEffect(() => {
    if (!preloading) {
      clear()
    }
  }, [preloading])

  const classes = menuToggle ? 'menu-button active' : 'menu-button'

  return (
    <CursorManager>
      {preloading ? (
        <PrelodingPage />
      ) : (
        <div className='main'>
          <>
            <button
              className={classes}
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span className='bar'></span>
            </button>
            <Cursor />
            <Menu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
            {/* <children should render pages /> */}
          </>
        </div>
      )}
    </CursorManager>
  )
}
