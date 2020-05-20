import React from 'react';
// import PropTypes from 'prop-types';

const DoneTask = ({ task, setDeleteId }) => {
    return (
        <div className="task">
            {task.completedDate && (
                <div className="task__expires">{`Ukończono dnia: ${task.completedDate}`}</div>
            )}
            <div className="task__container">
                <div className="task__select"></div>
                <div>
                    <div className="task__title">{task.task}</div>
                    {task.desc && <div className="task__desc">{task.desc}</div>}
                </div>
                <div className="task__functions">
                    <div className="actuall-tasks__settings-items">
                        <div
                            className="actuall-tasks__settings-item"
                            onClick={() => setDeleteId(task.id)}
                        >
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoneTask;
