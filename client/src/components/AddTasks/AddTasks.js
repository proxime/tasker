import React from 'react';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import TasksForm from './TasksForm';

const AddTasks = () => {
    return (
        <div className="add-tasks">
            <AccountInfo />
            <SectionTitle>Dodaj Zadanie</SectionTitle>
            <TasksForm />
        </div>
    );
};

export default AddTasks;
