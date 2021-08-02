import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../../store/tasks/actions';
import { useParams, useHistory } from 'react-router-dom';

import UserHeader from '../../components/User/UserHeader';
import TasksGrid from '../../components/Tasks/TasksGrid';
import Box from '@material-ui/core/Box';


export default function User() {

    const { username, id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const { tasks } = useSelector(state => state.tasksReducer);
    const { tasksError } = useSelector(state => state.tasksReducer);
    const { userToken } = useSelector(state => state.usersReducer);

    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        dispatch(getTasks(id));
    }, [])
    useEffect(() => {
        if(userToken === '') return history.push('/login');
        else return false;
    }, [userToken])

    return(
        <>
        <UserHeader username={username} />\
        { tasksError 
          ? <Box display="flex" justifyContent="center">You need to add something as a task, try again.</Box> 
          : false
        }
        <Box marginTop={3}>
          <TasksGrid loading={loading} tasksFromParent={tasks} />
        </Box>
        </>
    )
}