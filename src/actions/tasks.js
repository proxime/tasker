import {
    ADD_LOCAL_TASK,
    DELETE_LOCAL_TASK,
    SET_IMPORTANT_TASK,
    SET_AS_DONE_LOCAL_TASK,
    DELETE_LOCAL_DONE_TASK,
    DELETE_LOCAL_SEARCHED_TASK,
    DELETE_LOCAL_EXPIRED_TASK,
    SET_AS_EXPIRED_LOCAL_TASK,
} from './types';
import { setAlert } from './other';
const uuidv4 = require('uuid/v4');

export const addLocalTask = ({
    task,
    expires,
    desc,
    important,
}) => dispatch => {
    const newTask = {};

    newTask.id = uuidv4();
    newTask.task = task;
    newTask.important = important;
    if (expires) newTask.expires = expires;
    if (desc) newTask.desc = desc;

    dispatch({
        type: ADD_LOCAL_TASK,
        payload: newTask,
    });

    dispatch(setAlert('Zadanie zostało dodane', 'confirm'));
};

export const deleteLocalTask = id => dispatch => {
    dispatch({
        type: DELETE_LOCAL_TASK,
        payload: id,
    });
    dispatch(setAlert('Zadanie zostało usunięte', 'danger'));
};

export const setImportantLocalTask = id => dispatch => {
    dispatch({
        type: SET_IMPORTANT_TASK,
        payload: id,
    });
};

export const setAsDoneLocalTask = id => dispatch => {
    dispatch({
        type: SET_AS_DONE_LOCAL_TASK,
        payload: id,
    });
    dispatch(setAlert('Ukończyłeś zadanie', 'confirm'));
};

export const deleteLocalDoneTask = id => dispatch => {
    dispatch({
        type: DELETE_LOCAL_DONE_TASK,
        payload: id,
    });
    dispatch(setAlert('Zadanie zostało usunięte', 'danger'));
};

export const setAsExpiredLocalTask = id => dispatch => {
    dispatch({
        type: SET_AS_EXPIRED_LOCAL_TASK,
        payload: id,
    });
};

export const deleteLocalExpiredTask = id => dispatch => {
    dispatch({
        type: DELETE_LOCAL_EXPIRED_TASK,
        payload: id,
    });
    dispatch(setAlert('Zadanie zostało usunięte', 'danger'));
};

export const deleteLocalSearchedTask = id => dispatch => {
    dispatch({
        type: DELETE_LOCAL_SEARCHED_TASK,
        payload: id,
    });
    dispatch(setAlert('Zadanie zostało usunięte', 'danger'));
};
