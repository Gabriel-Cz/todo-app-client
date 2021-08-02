import * as types from './types';

const initialState = {
    tasks: [],
    newTask: {},
    tasksError: false,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case types.NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.TASKS_ERROR:
            return {
                ...state,
                tasksError: action.payload
            }
        default:
            return state;
    }
}

export default tasksReducer; 