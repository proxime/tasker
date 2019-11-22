import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoTasks from './NoTasks';
import TaskItem from './TaskItem';
import ConfirmDelete from '../ConfirmDelete';
import { connect } from 'react-redux';
import {
    deleteLocalTask,
    setImportantLocalTask,
    setAsDoneLocalTask,
} from '../../actions/tasks';

const Tasks = ({
    tasks,
    deleteLocalTask,
    setImportantLocalTask,
    setAsDoneLocalTask,
}) => {
    const [deleteId, setDeleteId] = useState(null);

    const getTaskList = tasks.map(task => (
        <TaskItem
            task={task}
            key={task.id}
            deleteLocalTask={setDeleteId}
            setImportantLocalTask={setImportantLocalTask}
            setAsDoneLocalTask={setAsDoneLocalTask}
        />
    ));

    return tasks.length === 0 ? (
        <NoTasks />
    ) : (
        <>
            <div className="task__list">{getTaskList}</div>
            {deleteId && (
                <ConfirmDelete
                    setDeleteId={setDeleteId}
                    deleteTask={deleteLocalTask}
                    id={deleteId}
                />
            )}
        </>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteLocalTask: PropTypes.func.isRequired,
    setImportantLocalTask: PropTypes.func.isRequired,
    setAsDoneLocalTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, {
    deleteLocalTask,
    setImportantLocalTask,
    setAsDoneLocalTask,
})(Tasks);
