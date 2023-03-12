'use client'
import { useState, useRef, useEffect } from 'react'
import './globals.css'
import './index.scss'
import Menu from '@/app/components/Menu'
import PrelodingPage from '@/app/components/Preloading'
import Cursor from '@/app/components/cursor/CustomCursor'
import CursorManager from '@/app/components/cursor/CursorManager'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: setting preloading
  const [preloading, setPreloading] = useState<boolean>(false)
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
    <html lang='en'>
      <body>
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
                {children}
              </>
            </div>
          )}
        </CursorManager>
      </body>
    </html>
  )
}
