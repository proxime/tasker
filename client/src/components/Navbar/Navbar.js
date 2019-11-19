import React from 'react';
import PropTypes from 'prop-types';
import NavbarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';
import NavbarSearch from './NavbarSearch/NavbarSearch';
import { connect } from 'react-redux';
import { changeMenuState } from '../../actions/other';

const Navbar = ({ isOpenMenu, changeMenuState }) => {
    return (
        <nav className="navbar">
            <NavbarButton
                isOpenMenu={isOpenMenu}
                changeMenuState={changeMenuState}
            />
            <NavbarLogo />
            <NavbarSearch />
        </nav>
    );
};

Navbar.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    changeMenuState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    isOpenMenu: state.other.isOpenMenu,
});

export default connect(mapStateToProps, { changeMenuState })(Navbar);
