import {
    ADD_LOCAL_TASK,
    DELETE_LOCAL_TASK,
    SET_IMPORTANT_TASK,
} from '../actions/types';

const initState = {
    tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
};

export default function(state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_LOCAL_TASK:
            localStorage.setItem(
                'tasks',
                JSON.stringify([payload, ...state.tasks]),
            );
            return {
                ...state,
                tasks: [payload, ...state.tasks],
            };
        case DELETE_LOCAL_TASK:
            localStorage.setItem(
                'tasks',
                JSON.stringify(state.tasks.filter(task => task.id !== payload)),
            );
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== payload),
            };
        case SET_IMPORTANT_TASK:
            const newTasks = state.tasks.map(task => {
                if (task.id === payload) task.important = !task.important;
                return task;
            });

            localStorage.setItem('tasks', JSON.stringify(newTasks));
            return {
                ...state,
                tasks: newTasks,
            };
        default:
            return state;
    }
}
