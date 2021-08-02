import axiosModule from '../../utils/axiosModule';
import * as types from './types';

export const signUp = (user) => async (dispatch) => {
    try {
        let signUpResponse = await axiosModule.post('/users/sign-up', user);
        console.log(signUpResponse.data);
        const loginBody = { 
            email: signUpResponse.data.email, 
            password: signUpResponse.data.password 
        }
        dispatch(login(loginBody));
        dispatch({
            type: types.SIGN_UP,
            payload: signUpResponse.data,
        })
        return signUpResponse.data;
    } catch (error) {
        dispatch({
            type: types.USERS_ERROR,
            payload: error.message,
        })
        setTimeout(() => {
            dispatch({
                type: types.USERS_ERROR,
                payload: false,
            });
        }, 2500)
    }
}

export const login = (user) => async (dispatch) => {
    try {
        let loginResponse = await axiosModule.post('/users/auth/login', user);
        let access_token = loginResponse.data.access_token;
        localStorage.setItem('token', access_token);
        dispatch({
            type: types.LOGIN,
            payload: loginResponse.data,
        });
        return loginResponse.data;
    } catch (error) {
        dispatch({
            type: types.USERS_ERROR,
            payload: error.message,
        });
        setTimeout(() => {
            dispatch({
                type: types.USERS_ERROR,
                payload: false,
            });
        }, 2500)
    }
}

export const closeSession = () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: types.CLOSE_SESSION,
        payload: ''
    }) 
}