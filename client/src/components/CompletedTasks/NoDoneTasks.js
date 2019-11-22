import React from 'react';

const NoDoneTasks = () => {
    return (
        <div className="no-tasks">
            <div className="no-tasks__icon">
                <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="no-tasks__content">
                <div className="no-tasks__title">
                    Wygląda na to, że nie ukończyłeś jeszcze żadnego zadania
                </div>
            </div>
        </div>
    );
};

export default NoDoneTasks;
