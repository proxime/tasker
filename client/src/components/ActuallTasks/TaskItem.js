import React from 'react';

const TaskItem = ({ task, handleChangeImportantState }) => {
    return (
        <div className={`task ${task.important ? 'important' : null}`}>
            <div className="task__expires">{`Ważne do: ${task.expire}`}</div>
            <div className="task__container">
                <div className="task__select"></div>
                <div>
                    <div className="task__title">{task.title}</div>
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
                        <div className="actuall-tasks__settings-item">
                            <i
                                className="fas fa-trash-alt"
                                style={{ color: '#eb4d4b' }}
                            ></i>
                        </div>
                        <div
                            className="actuall-tasks__settings-item"
                            onClick={() => handleChangeImportantState(task.id)}
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

export default TaskItem;
