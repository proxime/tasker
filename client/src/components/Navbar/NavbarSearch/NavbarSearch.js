import React, { useEffect, useState } from 'react';
import NavbarSearchMobile from './NavbarSearchMobile';
import NavbarDesktop from './NavbarDesktop';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchTask } from '../../../actions/other';

const NavbarSearch = ({ searchTask, history }) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        const match = window.matchMedia('(min-width: 950px)');
        setIsDesktop(match.matches);

        match.addListener(() => {
            const match = window.matchMedia('(min-width: 950px)');
            setIsDesktop(match.matches);
        });
    }, []);

    const handleSearch = e => {
        if (e) e.preventDefault();
        if (!searchText) return;
        searchTask(searchText);
        history.push('/search');
    };

    return isDesktop ? (
        <NavbarDesktop
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
        />
    ) : (
        <NavbarSearchMobile
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearch={handleSearch}
        />
    );
};

export default connect(null, { searchTask })(withRouter(NavbarSearch));
