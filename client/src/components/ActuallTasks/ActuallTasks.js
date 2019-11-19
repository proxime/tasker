import React, { useEffect, useState } from 'react';
import ActuallTasksSettings from './ActuallTasksSetting';

const ActuallTasks = () => {
    const [settingsHeight, setSettingsHeight] = useState(0);

    useEffect(() => {
        const settingsEl = document.querySelector('.settings');
        setSettingsHeight(settingsEl.offsetHeight);
    });

    return (
        <div className="actuall-tasks" style={{ paddingTop: settingsHeight }}>
            <ActuallTasksSettings />
        </div>
    );
};

export default ActuallTasks;
