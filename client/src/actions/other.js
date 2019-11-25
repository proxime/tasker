import {
    CHANGE_MENU_STATE,
    SEARCH_TASK,
    SET_ALERT,
    REMOVE_ALERT,
} from './types';
const uuidv4 = require('uuid/v4');

export const changeMenuState = state => dispatch => {
    dispatch({
        type: CHANGE_MENU_STATE,
        payload: state,
    });
};

export const searchTask = value => dispatch => {
    dispatch({
        type: SEARCH_TASK,
        payload: value,
    });
};

export const setAlert = (msg, type) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: { msg, type, id },
    });
};

export const removeAlert = id => dispatch => {
    dispatch({
        type: REMOVE_ALERT,
        payload: id,
    });
};
