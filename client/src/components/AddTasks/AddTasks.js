import React from 'react';
import ActuallTasksSettings from '../ActuallTasks/ActuallTasksSetting';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import TasksForm from './TasksForm';

const AddTasks = () => {
    return (
        <div className="add-tasks">
            <ActuallTasksSettings />
            <AccountInfo />
            <SectionTitle>Dodaj Zadanie</SectionTitle>
            <TasksForm />
        </div>
    );
};

export default AddTasks;
