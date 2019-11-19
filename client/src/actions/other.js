import { CHANGE_MENU_STATE } from './types';

export const changeMenuState = state => dispatch => {
    dispatch({
        type: CHANGE_MENU_STATE,
        payload: state,
    });
};
