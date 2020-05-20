import {
    ADD_LOCAL_TASK,
    DELETE_LOCAL_TASK,
    SET_IMPORTANT_TASK,
    SET_AS_DONE_LOCAL_TASK,
    DELETE_LOCAL_DONE_TASK,
    DELETE_LOCAL_EXPIRED_TASK,
    DELETE_LOCAL_SEARCHED_TASK,
    SET_AS_EXPIRED_LOCAL_TASK,
} from '../actions/types';

const initState = {
    tasks: localStorage.tasks ? JSON.parse(localStorage.tasks) : [],
    done: localStorage.done ? JSON.parse(localStorage.done) : [],
    expired: localStorage.expired ? JSON.parse(localStorage.expired) : [],
};

const date = new Date();
const year = date.getFullYear();
const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const stringDate = `${year}-${month}-${day}`;

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
        case SET_AS_DONE_LOCAL_TASK:
            const doneTaskIndex = state.tasks.findIndex(
                task => task.id === payload,
            );
            const tasks = [...state.tasks.filter(task => task.id !== payload)];
            const done = [state.tasks[doneTaskIndex], ...state.done];

            done[0].completedDate = stringDate;

            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.setItem('done', JSON.stringify(done));
            return {
                ...state,
                done,
                tasks,
            };
        case DELETE_LOCAL_DONE_TASK:
            const newDone = state.done.filter(task => task.id !== payload);
            localStorage.setItem('done', JSON.stringify(newDone));
            return {
                ...state,
                done: newDone,
            };
        case SET_AS_EXPIRED_LOCAL_TASK:
            const expiredTasks = state.tasks.filter(
                task => task.expires && task.expires < stringDate,
            );
            const NotExpiredTasks = state.tasks.filter(
                task => !task.expires || task.expires >= stringDate,
            );
            localStorage.setItem(
                'expired',
                JSON.stringify([...state.expired, ...expiredTasks]),
            );
            localStorage.setItem('tasks', JSON.stringify(NotExpiredTasks));

            return {
                ...state,
                tasks: NotExpiredTasks,
                expired: [...state.expired, ...expiredTasks],
            };
        case DELETE_LOCAL_EXPIRED_TASK:
            const newExpired = state.expired.filter(
                task => task.id !== payload,
            );
            localStorage.setItem('expired', JSON.stringify(newExpired));
            return {
                ...state,
                expired: newExpired,
            };
        case DELETE_LOCAL_SEARCHED_TASK:
            const searchedTasks = state.tasks.filter(
                task => task.id !== payload,
            );
            const searchedDoneTasks = state.done.filter(
                task => task.id !== payload,
            );
            const searchedExpiredTasks = state.expired.filter(
                task => task.id !== payload,
            );

            localStorage.setItem('tasks', JSON.stringify(searchedTasks));
            localStorage.setItem('done', JSON.stringify(searchedDoneTasks));
            localStorage.setItem(
                'expired',
                JSON.stringify(searchedExpiredTasks),
            );
            return {
                ...state,
                tasks: searchedTasks,
                done: searchedDoneTasks,
                expired: searchedExpiredTasks,
            };
        default:
            return state;
    }
}
