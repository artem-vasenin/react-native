import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../types";

export const TodoReduser = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now().toString(),
                    title: action.title
                }]};
        case UPDATE_TODO:
            return {...state,
                todos: state.todos
                    .filter(i => i.id !== action.id)};
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.map(i => {
                    if(i.id === action.id) {
                        i.title = action.title;
                    }
                    return i;
                })};
        default: return {...state};
    }
};