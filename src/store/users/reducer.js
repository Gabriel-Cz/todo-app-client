import { startOfYesterday } from 'date-fns/esm';
import * as types from './types';

const initialState = {
    userToken: localStorage.getItem('token') || '',
    userData: {},
    usersError: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP:
            return {
                ...state,
                userData: action.payload
            }
        case types.LOGIN:
            return {
                ...state,
                userData: action.payload
            }
        case types.SET_TOKEN:
            return {
                ...state,
                userToken: action.payload
            }
        case types.CLOSE_SESSION:
            return {
                ...state,
                userToken: action.payload
            }
        case types.USERS_ERROR:
            return {
                ...state,
                usersError: action.payload
            }
        default:
            return state;
    }
}

export default usersReducer; 
