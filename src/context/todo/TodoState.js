import React, { useReducer } from 'react';
import {TodoContext} from './TodoContext';
import {TodoReduser} from './TodoReduser';

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
    };
    const [state, dispatch] = useReducer(TodoReduser, initialState);

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
        }}>
            {children}
        </TodoContext.Provider>
    );
};