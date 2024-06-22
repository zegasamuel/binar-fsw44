import { createContext, useState } from 'react'

export const Context = createContext()
export const Provider = ({ children }) => {
    const [nama, setNama] = useState('jeffy nichol')
    return (
        <Context.Provider value={{ nama, setNama }}>
            {children}
        </Context.Provider>
    )
}
