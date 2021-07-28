import React, { createContext, useContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

export const useUserState = () => {
    const context = useContext(UserStateContext);
    return context;
}

export const useUserDispatch = () => {
    const context = useContext(UserDispatchContext);
    return context;
}

export const UserContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}