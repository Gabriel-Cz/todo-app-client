import axiosModule from '../../utils/axiosModule';
import * as types from './types';

export const signUp = (user) => async (dispatch) => {
    try {
        let signUpResponse = await axiosModule.post('/users/sign-up', user);
        const loginBody = { 
            email: user.email, 
            password: user.password 
        }
        await dispatch({
            type: types.SIGN_UP,
            payload: signUpResponse.data,
        })
        dispatch(login(loginBody));
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
        await dispatch({
            type: types.LOGIN,
            payload: loginResponse.data,
        });
        dispatch(setToken(access_token));
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

export const setToken = (token) => async (dispatch) => {
    localStorage.setItem('token', token);
    await dispatch({
        type: types.SET_TOKEN,
        payload: token
    })
}

export const closeSession = () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: types.CLOSE_SESSION,
        payload: ''
    }) 
}