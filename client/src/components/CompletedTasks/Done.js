import React from 'react';
import PropTypes from 'prop-types';
import NoDoneTasks from './NoDoneTasks';
import DoneTask from './DoneTask';
import { connect } from 'react-redux';

const Done = ({ done }) => {
    const getTaskList = done.map(task => (
        <DoneTask task={task} key={task.id} />
    ));

    return done.length === 0 ? (
        <NoDoneTasks />
    ) : (
        <>
            <div className="task__list">{getTaskList}</div>
        </>
    );
};

Done.propTypes = {
    done: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    done: state.tasks.done,
});

export default connect(mapStateToProps)(Done);
