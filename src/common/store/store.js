import {useContext, createContext} from 'react'
import initialState from './initialState'



export const context = createContext(initialState)

export const useStore = () => useContext(context)


