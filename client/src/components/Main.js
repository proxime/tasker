import React from 'react';
import PropTypes from 'prop-types';
import ActuallTasks from './ActuallTasks/ActuallTasks';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = ({ isOpenMenu }) => {
    return (
        <div className={`container ${isOpenMenu ? 'smaller' : ''}`}>
            <main>
                <Route path="/" exact component={ActuallTasks} />
            </main>
            <footer>asdasdads</footer>
        </div>
    );
};

Main.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isOpenMenu: state.other.isOpenMenu,
});

export default connect(mapStateToProps)(Main);
