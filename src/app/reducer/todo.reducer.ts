import {ActionReducer, Action} from '@ngrx/store';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo.action';
import {TodoModel} from '../models/todo.model';
import * as data from '../models/todo.data';

export const todoReducer = (state: TodoModel[] = data.TodoData, action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case UPDATE_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
};
