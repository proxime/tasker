import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Settings = ({ isOpenMenu, children }) => {
    return (
        <div className={`settings ${isOpenMenu ? 'lower' : ''}`}>
            {children}
        </div>
    );
};

Settings.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isOpenMenu: state.other.isOpenMenu,
});

export default connect(mapStateToProps)(Settings);
