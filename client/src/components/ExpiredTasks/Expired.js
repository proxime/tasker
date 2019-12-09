import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoExpiredTasks from './NoExpiredTasks';
import ExpiredItem from './ExpiredItem';
import ConfirmDelete from '../ConfirmDelete';
import { connect } from 'react-redux';
import { deleteLocalExpiredTask } from '../../actions/tasks';

const Expirded = ({ expired, deleteLocalExpiredTask }) => {
    const [deleteId, setDeleteId] = useState(null);

    const getTaskList = expired.map(task => (
        <ExpiredItem task={task} key={task.id} setDeleteId={setDeleteId} />
    ));

    return expired.length === 0 ? (
        <NoExpiredTasks />
    ) : (
        <>
            <div className="task__list">{getTaskList}</div>
            {deleteId && (
                <ConfirmDelete
                    setDeleteId={setDeleteId}
                    deleteTask={deleteLocalExpiredTask}
                    id={deleteId}
                />
            )}
        </>
    );
};

Expirded.propTypes = {
    expired: PropTypes.array.isRequired,
    deleteLocalExpiredTask: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    expired: state.tasks.expired,
});

export default connect(mapStateToProps, {
    deleteLocalExpiredTask,
})(Expirded);
