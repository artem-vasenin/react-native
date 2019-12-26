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
    FETCH_TODOS,
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
        ShowLoader();
        const response = await fetch(
          'https://react-native-1508e.firebaseio.com/todos.json',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
          }
        );
        const data = await response.json();
        dispatch({ type: ADD_TODO, title, id: data.name });
        HideLoader();
    };

    const FetchTodos = async () => {
        ShowLoader();
        ClearError();
        try {
            const response = await fetch(
                'https://react-native-1508e.firebaseio.com/todos.json',
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const data = await response.json();
            const todos = Object.keys(data)
                .map(key => ({ ...data[key], id: key}));
            dispatch({type: FETCH_TODOS, todos});
        } catch (e) {
            ShowError('Что-то не выводится список... ;(');
            console.log(e);
        } finally {
            HideLoader();
        }
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

    const UpdateTodo = async (id, title) => {
        ShowLoader();
        ClearError();
        try {
            await fetch(
                `https://react-native-1508e.firebaseio.com/todos/${id}.json`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({title}),
                }
            );
            dispatch({
                type: UPDATE_TODO,
                id,
                title,
            });
        } catch (e) {
            ShowError('Что-то не обновляется элемент... ;(');
            console.log(e);
        } finally {
            HideLoader();
        }
    };

    const ShowLoader = () => dispatch({ type: SHOW_LOADER });

    const HideLoader = () => dispatch({ type: HIDE_LOADER });

    const ShowError = error => dispatch({ type: SHOW_ERROR, error });

    const ClearError = () => dispatch({ type: CLEAR_ERROR });

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            error: state.error,
            addTodo,
            RemoveTodo,
            UpdateTodo,
            FetchTodos,
        }}>
            {children}
        </TodoContext.Provider>
    );
};