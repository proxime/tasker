import React from 'react';
import PropTypes from 'prop-types';
import NoTasks from './NoTasks';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { deleteLocalTask, setImportantLocalTask } from '../../actions/tasks';

const Tasks = ({ tasks, deleteLocalTask, setImportantLocalTask }) => {
    const getTaskList = tasks.map(task => (
        <TaskItem
            task={task}
            key={task.id}
            deleteLocalTask={deleteLocalTask}
            setImportantLocalTask={setImportantLocalTask}
        />
    ));

    return tasks.length === 0 ? (
        <NoTasks />
    ) : (
        <div className="task__list">{getTaskList}</div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteLocalTask: PropTypes.func.isRequired,
    setImportantLocalTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tasks: state.tasks.tasks,
});

export default connect(mapStateToProps, {
    deleteLocalTask,
    setImportantLocalTask,
})(Tasks);
