import React, { createContext, useState } from 'react'

export type CursorContentType = {
  size: string
  setSize: (c: string) => void
}

export const CursorContext = createContext<CursorContentType>({
  size: 'regular',
  setSize: () => {},
})

export default function CursorManager(props: React.PropsWithChildren<{}>) {
  const [size, setSize] = useState('regular')
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {props.children}
    </CursorContext.Provider>
  )
}
