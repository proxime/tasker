import React from 'react';
import ActuallTasksSettings from '../ActuallTasks/ActuallTasksSetting';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import Done from './Done';

const CompletedTasks = () => {
    return (
        <div className="completed-tasks">
            {/* <ActuallTasksSettings /> */}
            <AccountInfo />
            <SectionTitle>Ukończone Zadania</SectionTitle>
            <Done />
        </div>
    );
};

export default CompletedTasks;
