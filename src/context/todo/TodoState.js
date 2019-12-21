import React, { useReducer, useContext } from 'react';
import {TodoContext} from './TodoContext';
import {TodoReduser} from './TodoReduser';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/ScreenContext';

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
    };
    const { ChangeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(TodoReduser, initialState);

    const AddTodo = title => dispatch({ type: ADD_TODO, title });
    const RemoveTodo = id => {
        ChangeScreen(null);
        dispatch({type: REMOVE_TODO, id});
    };
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