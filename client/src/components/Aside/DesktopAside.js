import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const DesktopAside = ({ isOpenMenu }) => {
    return (
        <aside className={`desktop-aside ${isOpenMenu ? 'open' : ''}`}>
            <Scrollbars className="desktop-aside__scroll">
                <div className="desktop-aside__list">
                    <NavLink to="/add" className="desktop-aside__item">
                        <div className="desktop-aside__item-icon">
                            <i className="fas fa-plus"></i>
                        </div>
                        <p className="desktop-aside__item-text">
                            Dodaj Zadanie
                        </p>
                    </NavLink>
                    <NavLink exact to="/" className="desktop-aside__item">
                        <div className="desktop-aside__item-icon">
                            <i className="far fa-clipboard"></i>
                        </div>
                        <p className="desktop-aside__item-text">
                            Aktualne Zadania
                        </p>
                    </NavLink>
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
