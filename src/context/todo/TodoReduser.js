import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

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
    DEFAULT: state => state,
};

export const TodoReduser = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};