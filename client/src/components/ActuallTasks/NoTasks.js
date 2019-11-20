import React from 'react';
import { Link } from 'react-router-dom';

const NoTasks = () => {
    return (
        <div className="no-tasks">
            <div className="no-tasks__icon">
                <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="no-tasks__content">
                <div className="no-tasks__title">Nie znaleziono zadań</div>
                <div className="no-tasks__text">
                    Czy chcesz <Link to="/add">Dodać zadanie?</Link>
                </div>
            </div>
        </div>
    );
};

export default NoTasks;
