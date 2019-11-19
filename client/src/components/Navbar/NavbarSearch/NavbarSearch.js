import React, { useEffect, useState } from 'react';
import NavbarSearchMobile from './NavbarSearchMobile';
import NavbarDesktop from './NavbarDesktop';

const NavbarSearch = () => {
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

    return isDesktop ? (
        <NavbarDesktop searchText={searchText} setSearchText={setSearchText} />
    ) : (
        <NavbarSearchMobile
            searchText={searchText}
            setSearchText={setSearchText}
        />
    );
};

export default NavbarSearch;
