import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeSession } from '../../../store/users/actions';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import NewTask from '../../Tasks/NewTask';

export default function UserHeader({ username }) {
    const dispatch = useDispatch();

    const closeUserSession = () => {
        dispatch(closeSession());
    }

    return(
        <>
        <Box display="flex" marginTop={2} marginLeft={2}>
            <Button onClick={closeUserSession}>
              Close Session
            </Button>
        </Box>
        <Typography variant="h6">
            <Box textAlign="center" display="flex" justifyContent="center" margin={3}>Hi {username}, these are your current tasks</Box>
        </Typography>
        <Box display="flex" justifyContent="center">
            <NewTask />
        </Box>
        </>
    )
}