import axiosModule from '../../utils/axiosModule';
import * as types from './types';
import { store } from '../index';

const state = store.getState();

const authToken = state.usersReducer.userToken;

const config = {
    headers: {
        Authorization: `Bearer ${authToken}`
    }
}

export const getTasks = (id) => async (dispatch) => {
    try {
        let getTasksResponse = await axiosModule.get(`/tasks/${id}`, config);
        dispatch({
            type: types.GET_TASKS,
            payload: getTasksResponse.data,
        });
    } catch (error) {
        dispatch({
            type: types.TASKS_ERROR,
            payload: error.message,
        })
        setTimeout(() => {
            dispatch({
                type: types.TASKS_ERROR,
                payload: false,
            })
        }, 2500)
    }
}

export const newTask = (task, id) => async (dispatch) => {
    try {
        console.log(authToken);
        let newTaskResponse = await axiosModule.post(`/tasks/${id}/new-task`, task, config);
        dispatch({
            type: types.NEW_TASK,
            payload: newTaskResponse.data,
        });
    } catch (error) {
        dispatch({
            type: types.TASKS_ERROR,
            payload: error.message,
        })
        setTimeout(() => {
            dispatch({
                type: types.TASKS_ERROR,
                payload: false,
            })
        }, 2500)
    }
}