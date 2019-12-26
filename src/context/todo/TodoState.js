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
import { Http } from '../../http';

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
        ClearError();
        try {
            const data = await Http.post(
                'https://react-native-1508e.firebaseio.com/todos.json',
                { title },
            );
            dispatch({ type: ADD_TODO, title, id: data.name });
        } catch (e) {
            ShowError('Что-то не добавляется в список... ;(');
            console.log(e);
        } finally {
            HideLoader();
        }
        
    };

    const FetchTodos = async () => {
        ShowLoader();
        ClearError();
        try {
            const data = await Http.get(
                'https://react-native-1508e.firebaseio.com/todos.json'
            );
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
            {
                text: 'Удалить',
                style: 'destructive',
                onPress: async () => {
                    await Http.delete(
                        `https://react-native-1508e.firebaseio.com/todos/${id}.json`
                    );
                    ChangeScreen(null);
                    dispatch({type: REMOVE_TODO, id});;
                }
            },
        ],
        {cancelable: false},
        );
        
    };

    const UpdateTodo = async (id, title) => {
        ShowLoader();
        ClearError();
        try {
            await Http.patch(
                `https://react-native-1508e.firebaseio.com/todos/${id}.json`,
                { title },
            );
            dispatch({ type: UPDATE_TODO, id, title });
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