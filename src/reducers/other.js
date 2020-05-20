import {
    CHANGE_MENU_STATE,
    SEARCH_TASK,
    SET_ALERT,
    REMOVE_ALERT,
} from '../actions/types';

const initialState = {
    isOpenMenu: true,
    search: '',
    alert: {
        msg: '',
        type: null,
        id: null,
    },
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_MENU_STATE:
            return {
                ...state,
                isOpenMenu: payload,
            };
        case SEARCH_TASK:
            return {
                ...state,
                search: payload,
            };
        case SET_ALERT:
            return {
                ...state,
                alert: payload,
            };
        case REMOVE_ALERT:
            if (payload === state.alert.id) {
                return {
                    ...state,
                    alert: {
                        msg: '',
                        type: null,
                        id: null,
                    },
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}
