import React from 'react';
import ActuallTasksSettings from './ActuallTasksSetting';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import Tasks from './Tasks';

const ActuallTasks = () => {
    return (
        <div className="actuall-tasks">
            <ActuallTasksSettings />
            <AccountInfo />
            <SectionTitle>Aktualne Zadania</SectionTitle>
            <Tasks />
        </div>
    );
};

export default ActuallTasks;
