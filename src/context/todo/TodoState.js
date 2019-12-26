import React, { useReducer, useContext } from 'react';
import { Alert } from 'react-native';
import { TodoContext } from './TodoContext';
import { TodoReducer } from './TodoReducer';
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR,
} from '../types';
import { ScreenContext } from '../screen/ScreenContext';

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null,
    };
    const { ChangeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const addTodo = async title => {
        const response = await fetch(
          'https://react-native-1508e.firebaseio.com/todos.json',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
          }
        );
        const data = await response.json();
        console.log(data);
        dispatch({ type: ADD_TODO, title, id: data.name });
    };

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

    const ShowLoader = () => dispatch({ type: SHOW_LOADER });

    const HideLoader = () => dispatch({ type: HIDE_LOADER });

    const ShowError = err => dispatch({ type: SHOW_ERROR, error });

    const ClearError = () => dispatch({ type: CLEAR_ERROR });

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