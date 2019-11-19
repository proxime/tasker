import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const DesktopAside = ({ isOpenMenu }) => {
    return (
        <aside className={`desktop-aside ${isOpenMenu ? 'open' : ''}`}>
            <Scrollbars className="desktop-aside__scroll">
                <div className="desktop-aside__list">
                    <div className="desktop-aside__item">
                        <div className="desktop-aside__item-icon">
                            <i className="fas fa-plus"></i>
                        </div>
                        <p className="desktop-aside__item-text">
                            Dodaj Zadanie
                        </p>
                    </div>
                    <div className="desktop-aside__item">
                        <div className="desktop-aside__item-icon">
                            <i className="far fa-clipboard"></i>
                        </div>
                        <p className="desktop-aside__item-text">
                            Aktualne Zadania
                        </p>
                    </div>
                    <div className="desktop-aside__item">
                        <div className="desktop-aside__item-icon">
                            <i className="fas fa-tasks"></i>
                        </div>
                        <p className="desktop-aside__item-text">
                            Ukończone Zadania
                        </p>
                    </div>
                </div>
            </Scrollbars>
        </aside>
    );
};

DesktopAside.propType = {
    isOpenMenu: PropTypes.bool.isRequired,
};

export default DesktopAside;
