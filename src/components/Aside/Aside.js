import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MobileAside from './MobileAside';
import DesktopAside from './DesktopAside';
import { connect } from 'react-redux';
import { changeMenuState } from '../../actions/other';

const Aside = ({ isOpenMenu, changeMenuState }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const match = window.matchMedia('(min-width: 950px)');
        setIsDesktop(match.matches);
        if (match.matches) changeMenuState(true);
        else changeMenuState(false);

        match.addListener(() => {
            const match = window.matchMedia('(min-width: 950px)');
            if (match.matches) changeMenuState(true);
            else changeMenuState(false);
            setIsDesktop(match.matches);
        });
    }, []);

    useEffect(() => {
        if (!isDesktop && isOpenMenu) document.body.classList.add('hidden');
        else document.body.classList.remove('hidden');
    });

    return isDesktop ? (
        <DesktopAside isOpenMenu={isOpenMenu} />
    ) : (
        isOpenMenu && <MobileAside />
    );
};

Aside.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    changeMenuState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isOpenMenu: state.other.isOpenMenu,
});

export default connect(mapStateToProps, { changeMenuState })(Aside);
