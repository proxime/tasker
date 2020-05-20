import { combineReducers } from 'redux';
import other from './other';
import tasks from './tasks';

export default combineReducers({
    other,
    tasks,
});
