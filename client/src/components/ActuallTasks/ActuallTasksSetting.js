import React, { useState } from 'react';
import Settings from '../Settings';

const ActuallTasksSettings = () => {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelect = () => {
        setIsSelected(!isSelected);
    };

    return (
        <Settings>
            <div className="actuall-tasks__settings">
                <div className="actuall-tasks__settings-select">
                    <div
                        className={`actuall-tasks__settings-select-item ${
                            isSelected ? 'active' : ''
                        }`}
                        onClick={() => handleSelect()}
                    >
                        {isSelected && <i class="fas fa-times"></i>}
                    </div>
                </div>
                <div className="actuall-tasks__settings-items">
                    <div className="actuall-tasks__settings-item">
                        <i class="fas fa-check"></i>
                    </div>
                    <div className="actuall-tasks__settings-item">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                    <div className="actuall-tasks__settings-item">
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </Settings>
    );
};

export default ActuallTasksSettings;
