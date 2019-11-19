import React, { useEffect, useState } from 'react';
import ActuallTasksSettings from './ActuallTasksSetting';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import Tasks from './Tasks';

const ActuallTasks = () => {
    const [settingsHeight, setSettingsHeight] = useState(0);

    useEffect(() => {
        const settingsEl = document.querySelector('.settings');
        setSettingsHeight(settingsEl.offsetHeight);
    });

    return (
        <div className="actuall-tasks" style={{ paddingTop: settingsHeight }}>
            <ActuallTasksSettings />
            <AccountInfo />
            <SectionTitle>Aktualne Zadania</SectionTitle>
            <Tasks />
        </div>
    );
};

export default ActuallTasks;
