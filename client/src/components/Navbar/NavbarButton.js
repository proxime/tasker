import React from 'react';
import PropTypes from 'prop-types';
import '../../utils/hamburgers/dist/hamburgers.min.css';

const NavbarButton = ({ isOpenMenu, changeMenuState }) => {
    return (
        <div className="navbar__button">
            <button
                className={`hamburger hamburger--slider ${
                    isOpenMenu ? 'is-active' : ''
                }`}
                type="button"
                onClick={() => changeMenuState(!isOpenMenu)}
            >
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    );
};

NavbarButton.propTypes = {
    isOpenMenu: PropTypes.bool,
    changeMenuState: PropTypes.func.isRequired,
};

export default NavbarButton;
