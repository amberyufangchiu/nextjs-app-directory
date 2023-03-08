import React, { useContext, useRef, useEffect } from 'react'
import { CursorContext, CursorContentType } from './CursorManager'
import './cursor.scss'

const CustomCursor: React.FC = () => {
  const secondaryCursor = useRef<HTMLDivElement>(null)
  const { size } = useContext<CursorContentType>(CursorContext)

  console.log(size)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const mouseX = clientX
      const mouseY = clientY
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${
          mouseX - secondaryCursor.current.clientWidth / 2
        }px, ${mouseY - secondaryCursor.current.clientHeight / 2}px, 0)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div>
      <div className={`secondary-cursor ${size}`} ref={secondaryCursor}></div>
    </div>
  )
}

export default CustomCursor
