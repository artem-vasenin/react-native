import React, { useReducer } from 'react';
import {TodoContext} from './TodoContext';
import {TodoReduser} from './TodoReduser';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
    };
    const [state, dispatch] = useReducer(TodoReduser, initialState);

    const AddTodo = title => dispatch({ type: ADD_TODO, title });
    const RemoveTodo = id => dispatch({type: REMOVE_TODO, id});
    const UpdateTodo = (id, title) => dispatch({
        type: UPDATE_TODO,
        id,
        title,
    });

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            AddTodo,
            RemoveTodo,
            UpdateTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};