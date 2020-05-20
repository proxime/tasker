import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoDoneTasks from './NoDoneTasks';
import DoneTask from './DoneTask';
import ConfirmDelete from '../ConfirmDelete';
import { connect } from 'react-redux';
import { deleteLocalDoneTask } from '../../actions/tasks';

const Done = ({ done, deleteLocalDoneTask }) => {
    const [deleteId, setDeleteId] = useState(null);

    const getTaskList = done.map(task => (
        <DoneTask task={task} key={task.id} setDeleteId={setDeleteId} />
    ));

    return done.length === 0 ? (
        <NoDoneTasks />
    ) : (
        <>
            <div className="task__list">{getTaskList}</div>
            {deleteId && (
                <ConfirmDelete
                    setDeleteId={setDeleteId}
                    deleteTask={deleteLocalDoneTask}
                    id={deleteId}
                />
            )}
        </>
    );
};

Done.propTypes = {
    done: PropTypes.array.isRequired,
    deleteLocalDoneTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    done: state.tasks.done,
});

export default connect(mapStateToProps, { deleteLocalDoneTask })(Done);
