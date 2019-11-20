import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, deleteLocalTask, setImportantLocalTask }) => {
    return (
        <div className={`task ${task.important ? 'important' : null}`}>
            {task.expires && (
                <div className="task__expires">{`Ważne do: ${task.expires}`}</div>
            )}
            <div className="task__container">
                <div className="task__select"></div>
                <div>
                    <div className="task__title">{task.task}</div>
                    {task.desc && <div className="task__desc">{task.desc}</div>}
                </div>
                <div className="task__functions">
                    <div className="actuall-tasks__settings-items">
                        <div className="actuall-tasks__settings-item">
                            <i
                                className="fas fa-check"
                                style={{ color: '#badc58' }}
                            ></i>
                        </div>
                        <div
                            className="actuall-tasks__settings-item"
                            onClick={() => deleteLocalTask(task.id)}
                        >
                            <i
                                className="fas fa-trash-alt"
                                style={{ color: '#eb4d4b' }}
                            ></i>
                        </div>
                        <div
                            className="actuall-tasks__settings-item"
                            onClick={() => setImportantLocalTask(task.id)}
                        >
                            {task.important ? (
                                <i
                                    className="fas fa-star"
                                    style={{ color: '#f9ca24' }}
                                ></i>
                            ) : (
                                <i
                                    className="far fa-star"
                                    style={{ color: '#f9ca24' }}
                                ></i>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    deleteLocalTask: PropTypes.func.isRequired,
    setImportantLocalTask: PropTypes.func.isRequired,
};

export default TaskItem;
