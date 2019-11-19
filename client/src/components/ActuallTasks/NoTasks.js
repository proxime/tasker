import React from 'react';

const NoTasks = () => {
    return (
        <div className="no-tasks">
            <div className="no-tasks__icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div className="no-tasks__content">
                <div className="no-tasks__title">Nie znaleziono zadań</div>
                <div className="no-tasks__text">
                    Czy chcesz <a href="#!">Dodać zadanie?</a>
                </div>
            </div>
        </div>
    );
};

export default NoTasks;
