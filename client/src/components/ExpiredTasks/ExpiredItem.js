import React from 'react';
// import PropTypes from 'prop-types';

const ExpiredTask = ({ task, setDeleteId }) => {
    return (
        <div className="task">
            {task.expires && (
                <div className="task__expires">{`Zadanie wygasło dnia: ${task.expires}`}</div>
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

export default ExpiredTask;
