import React, { useState } from 'react';
import AccountInfo from './AccountInfo';
import SectionTitle from './SectionTitle';
import TaskItem from './ActuallTasks/TaskItem';
import DoneTask from './CompletedTasks/DoneTask';
import ExpiredTask from './ExpiredTasks/ExpiredItem';
import ConfirmDelete from './ConfirmDelete';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    setImportantLocalTask,
    setAsDoneLocalTask,
    deleteLocalSearchedTask,
} from '../actions/tasks';

const SearchResult = ({
    search,
    tasks: { tasks, done, expired },
    setImportantLocalTask,
    setAsDoneLocalTask,
    deleteLocalSearchedTask,
}) => {
    const [deleteId, setDeleteId] = useState('');
    if (!search) return <Redirect to="/" />;

    const actualTasksNumber = tasks.filter(task => {
        const word = task.task.toLowerCase();
        const include = word.search(search.toLowerCase());
        if (include >= 0) return task;
        return false;
    });

    const doneTasksNumber = done.filter(done => {
        const word = done.task.toLowerCase();
        const include = word.search(search.toLowerCase());
        if (include >= 0) return done;
        return false;
    });

    const expiredTasksNumber = expired.filter(done => {
        const word = done.task.toLowerCase();
        const include = word.search(search.toLowerCase());
        if (include >= 0) return done;
        return false;
    });

    const actualTasks = actualTasksNumber.map(task => (
        <TaskItem
            task={task}
            key={task.id}
            deleteLocalTask={setDeleteId}
            setImportantLocalTask={setImportantLocalTask}
            setAsDoneLocalTask={setAsDoneLocalTask}
        />
    ));

    const doneTasks = doneTasksNumber.map(task => (
        <DoneTask task={task} key={task.id} setDeleteId={setDeleteId} />
    ));

    const expiredTasks = expiredTasksNumber.map(task => (
        <ExpiredTask task={task} key={task.id} setDeleteId={setDeleteId} />
    ));

    return (
        <>
            <AccountInfo />
            {(doneTasks.length > 0 || actualTasks.length > 0) && (
                <SectionTitle>
                    Wyniki wyszukiwania dla{' '}
                    <span className="search-color">"{search}"</span>
                </SectionTitle>
            )}
            {actualTasks.length > 0 && (
                <>
                    <SectionTitle>Aktualne Zadania</SectionTitle>
                    {actualTasks}
                </>
            )}
            {doneTasks.length > 0 && (
                <>
                    <SectionTitle>UKOŃCZONE ZADANIA</SectionTitle>
                    {doneTasks}
                </>
            )}
            {expiredTasks.length > 0 && (
                <>
                    <SectionTitle>Wygasłe ZADANIA</SectionTitle>
                    {expiredTasks}
                </>
            )}
            {!doneTasks.length && !actualTasks.length && !expiredTasks.length && (
                <div className="no-tasks">
                    <div className="no-tasks__icon">
                        <i className="fas fa-exclamation-circle"></i>
                    </div>
                    <div className="no-tasks__content">
                        <div className="no-tasks__title">
                            Brak wyników wyszukiwania
                        </div>
                        <div className="no-tasks__text">
                            <span className="search-color">"{search}"</span>
                        </div>
                    </div>
                </div>
            )}
            {deleteId && (
                <ConfirmDelete
                    setDeleteId={setDeleteId}
                    deleteTask={deleteLocalSearchedTask}
                    id={deleteId}
                />
            )}
        </>
    );
};

const mapStateToProps = state => ({
    search: state.other.search,
    tasks: state.tasks,
});

export default connect(mapStateToProps, {
    setImportantLocalTask,
    setAsDoneLocalTask,
    deleteLocalSearchedTask,
})(SearchResult);
