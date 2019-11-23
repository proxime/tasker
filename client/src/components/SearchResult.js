import React, { useState } from 'react';
import AccountInfo from './AccountInfo';
import SectionTitle from './SectionTitle';
import TaskItem from './ActuallTasks/TaskItem';
import DoneTask from './CompletedTasks/DoneTask';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setImportantLocalTask, setAsDoneLocalTask } from '../actions/tasks';

const SearchResult = ({
    search,
    tasks: { tasks, done },
    setImportantLocalTask,
    setAsDoneLocalTask,
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

    return (
        <>
            <AccountInfo />
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
})(SearchResult);
