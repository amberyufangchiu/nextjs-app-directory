import '../styles/globals.css'
import style from '../styles/index.module.scss'
import Nav from '@/app/components/Nav'
import Header from '@/app/components/Header'
import Cursor from '@/app/components/cursor/CustomCursor'
import CursorManager from '@/app/components/cursor/CursorManager'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true)
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

  return (
    <CursorManager>
      {preloading ? (
        <div>hello</div>
      ) : (
        <div className={style.main}>
          <>
            <Cursor />
            <Nav />
            <Header />
          </>
        </div>
      )}
    </CursorManager>
  )
}
