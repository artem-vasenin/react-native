import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    FETCH_TODOS,
    CLEAR_ERROR,
    SHOW_ERROR,
} from "../types";

const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
        todos: [...state.todos, {
            id: Date.now().toString(),
            title
        }]}),
    [REMOVE_TODO]: (state, {id}) => ({
        ...state,
        todos: state.todos.filter(i => i.id !== id)
    }),
    [UPDATE_TODO]: (state, { id, title }) => ({
        ...state,
        todos: state.todos.map(i => {
            if(i.id === id) {
                i.title = title;
            }
            return i;
        })}),
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [HIDE_LOADER]: state => ({ ...state, loading: false }),
    [CLEAR_ERROR]: state => ({ ...state, error: null }),
    [SHOW_ERROR]: (state, error) => ({ ...state, error }),
    [FETCH_TODOS]: (state, { todos }) => ({ ...state, todos }),
    DEFAULT: state => state,
};

export const TodoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};