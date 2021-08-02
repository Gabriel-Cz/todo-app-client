import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function TasksGrid({ loading, tasksFromParent }) {
    return(
        <>
        { loading 
          ? 
          <Box display="flex" justifyContent="center">
            <CircularProgress/>
          </Box>
          :
          <Grid container spacing={3} justifyContent="center" >
          {tasksFromParent.map(task => (
            <Grid 
              item 
              xs={10}
              sm={6} 
              md={6}
              lg={3}
            >
                <Paper>
                    <Box padding={3}>
                      {task.content}
                    </Box>
                    <caption>
                      <Box display="flex" justifyContent="end" align="left" padding={3}>
                        {task.date}
                      </Box>
                    </caption>
                </Paper>
            </Grid>
          ))}
        </Grid>
        }
        </>
    )
}