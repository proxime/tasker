import { CHANGE_MENU_STATE } from '../actions/types';

const initialState = {
    isOpenMenu: false,
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CHANGE_MENU_STATE:
            return {
                ...state,
                isOpenMenu: payload,
            };
        default:
            return state;
    }
}
