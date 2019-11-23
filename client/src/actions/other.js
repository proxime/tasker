import { CHANGE_MENU_STATE, SEARCH_TASK } from './types';

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
