import React from 'react';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import Tasks from './Tasks';

const ActuallTasks = () => {
    return (
        <div className="actuall-tasks">
            <AccountInfo />
            <SectionTitle>Aktualne Zadania</SectionTitle>
            <Tasks />
        </div>
    );
};

export default ActuallTasks;
