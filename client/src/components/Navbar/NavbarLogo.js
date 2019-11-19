import React from 'react';

const NavbarLogo = () => {
    return (
        <div className="navbar__logo-container">
            <svg
                version="1.1"
                className="navbar__logo"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 400 400"
                enableBackground="new 0 0 400 400"
            >
                <path
                    fill="#ffffff"
                    d="M0,42.53L223,400l177-118.48V170c0,0-111,195-164,174c-36.53-14.47-69.57-102.34-105.4-196.29
	                c-5.53-14.51-10.84-28.77-15.81-42.36C93.23,46.41,78,0,78,0s0,29.37-25,42.53S0,42.53,0,42.53z"
                />
            </svg>
            <div className="navbar__title">Tasker</div>
        </div>
    );
};

export default NavbarLogo;
