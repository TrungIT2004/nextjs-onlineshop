'use client'

import { useState, createContext } from 'react'

export const CurrentProductContext = createContext({})

const Provider = ({children}:any) => {
  const [currentProduct, setCurrentProduct] = useState( () => [] )

  return (
    <CurrentProductContext.Provider value={ { currentProduct, setCurrentProduct } }>
      {children}
    </CurrentProductContext.Provider>
  )
}

export default Provider
