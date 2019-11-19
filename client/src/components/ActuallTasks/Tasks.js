import React, { useState } from 'react';
import NoTasks from './NoTasks';
import TaskItem from './TaskItem';

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 0,
            title: 'Lorem ipsum dolor sit amet, consectetur',
            expire: '20-12-2019',
            date: '19-11-2019',
            important: false,
        },
        {
            id: 1,
            title:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            desc:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
            expire: '20-12-2019',
            date: '19-11-2019',
            important: true,
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            desc:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            expire: '20-12-2019',
            date: '19-11-2019',
            important: false,
        },
    ]);

    const handleChangeImportantState = id => {
        const index = tasks.findIndex(task => task.id === id);
        if (index > -1) {
            const newTasks = [...tasks];
            newTasks[index].important = !newTasks[index].important;
            setTasks(newTasks);
        }
    };

    const getTaskList = () =>
        tasks.map(task => (
            <TaskItem
                task={task}
                key={task.id}
                handleChangeImportantState={handleChangeImportantState}
            />
        ));

    return tasks.length === 0 ? (
        <NoTasks />
    ) : (
        <div className="task__list">{getTaskList()}</div>
    );
};

export default Tasks;
