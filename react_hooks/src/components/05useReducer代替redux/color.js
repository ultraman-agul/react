import React, { createContext, useReducer } from 'react'

export const ColorContext = createContext()

export const UPDATE_COLOR = 'updatecolor'
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.data
        default:
            return state
    }
}
export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'red')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}
