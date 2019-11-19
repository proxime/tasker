import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NavbarSearchMobile = ({ searchText, setSearchText }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchMoblie = () => {
        if (!isSearchOpen) {
            setIsSearchOpen(true);
            document
                .querySelector('.navbar__search-mobile-input input')
                .focus();
        } else {
            console.log('search');
        }
    };

    return (
        <>
            <div
                className="navbar__search-mobile"
                onClick={() => handleSearchMoblie()}
            >
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="512px"
                    height="512px"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                >
                    <g>
                        <g>
                            <path
                                fill="#fff"
                                d="M338.752,99.482c-65.965-65.974-173.306-65.974-239.277,0c-65.967,65.964-65.967,173.305,0,239.269
                                c63.708,63.712,165.99,65.879,232.342,6.544l13.413,13.413c-3.34,8.56-1.59,18.623,5.311,25.528l70.782,70.782
                                c9.305,9.31,24.397,9.305,33.696,0c9.31-9.299,9.31-24.387,0-33.696l-70.777-70.772c-6.905-6.899-16.988-8.65-25.533-5.311
                                l-13.413-13.423C404.636,265.465,402.463,163.188,338.752,99.482z M119.698,318.539c-54.819-54.819-54.819-144.015,0-198.834
                                c54.819-54.83,144.017-54.819,198.836,0s54.819,144.02,0,198.839S174.517,373.358,119.698,318.539z"
                            />
                            <path
                                fill="#fff"
                                d="M153.1,151.877c23.944-23.95,51.774-41.331,81.037-52.169c-33.153-1.886-68.66,11.014-95.909,38.253
                                c-27.624,27.626-40.488,63.746-38.142,97.302C110.841,205.137,128.511,176.46,153.1,151.877z"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div
                className={`navbar__search-mobile-input ${
                    isSearchOpen ? 'active' : ''
                }`}
            >
                <form>
                    <div
                        className="navbar__search-mobile-input-close"
                        onClick={() => {
                            setIsSearchOpen(false);
                            setSearchText('');
                        }}
                    >
                        <i className="fas fa-times"></i>
                    </div>
                    <input
                        type="text"
                        name="search"
                        placeholder="Czego szukasz?"
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                    />
                </form>
            </div>
        </>
    );
};

NavbarSearchMobile.ptopTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func.isRequired,
};

export default NavbarSearchMobile;
