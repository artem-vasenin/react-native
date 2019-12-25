import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types';
import { ScreenContext } from '../screen/ScreenContext';

export const TodoState = ({children}) => {
    const initialState = { todos: [] };
    const { ChangeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = title => dispatch({ type: ADD_TODO, title });

    const RemoveTodo = id => {
        const todo = state.todos.find(t => t.id === id);
        Alert.alert(
        'Удалить элемент',
        `Точно надо удалить "${todo.title}"?`,
        [
            { text: 'Отмена', style: 'cancel' },
            {text: 'Удалить', style: 'destructive', onPress: () => {
                ChangeScreen(null);
                dispatch({type: REMOVE_TODO, id});;
            }},
        ],
        {cancelable: false},
        );
        
    };

    const UpdateTodo = (id, title) => dispatch({
        type: UPDATE_TODO,
        id,
        title,
    });

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            addTodo,
            RemoveTodo,
            UpdateTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
};