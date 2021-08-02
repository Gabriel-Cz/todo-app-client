import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { newTask } from '../../../store/tasks/actions';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    margin: 15
  },
  button: {
    marginTop: 20,
    margin: 10,
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let { id } = useParams();

  const [open, setOpen] = useState(false);
  const [taskContent, setTaskContent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleContent = (event) => {
    setTaskContent(event.target.value);
  }
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const submitTask = async () => {
      const task = {
          content: taskContent,
          date: selectedDate,
      }
      dispatch((newTask(task, id)));
      handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="primary">
        New Task
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <TextField 
                id="filled-basic" 
                label="Your Task" 
                value={taskContent}
                required
                className={classes.textField}
                onChange={handleContent}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
              <Button className={classes.button} variant="contained" color="primary" onClick={submitTask}>
                  Create Task
              </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}