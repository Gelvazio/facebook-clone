/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Projeto Facebook Clone;
*/
import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider
        value={useReducer(reducer, initialState,)}
    >   
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)