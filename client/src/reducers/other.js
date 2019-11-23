import { CHANGE_MENU_STATE, SEARCH_TASK } from '../actions/types';

const initialState = {
    isOpenMenu: true,
    search: '',
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
        default:
            return state;
    }
}
