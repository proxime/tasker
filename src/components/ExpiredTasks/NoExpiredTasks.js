import React from 'react';

const NoExpiredTasks = () => {
    return (
        <div className="no-tasks">
            <div className="no-tasks__icon">
                <i class="fas fa-hourglass-end"></i>
            </div>
            <div className="no-tasks__content">
                <div className="no-tasks__title">Nie znaleziono zadań</div>
                <div className="no-tasks__text">Żadne zadanie nie wygasło</div>
            </div>
        </div>
    );
};

export default NoExpiredTasks;
