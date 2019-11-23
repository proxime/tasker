import React from 'react';
import PropTypes from 'prop-types';
import ActuallTasks from './ActuallTasks/ActuallTasks';
import AddTasks from './AddTasks/AddTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import SearchResult from './SearchResult';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = ({ isOpenMenu }) => {
    return (
        <div className={`container ${isOpenMenu ? 'smaller' : ''}`}>
            <main>
                <Route path="/" exact component={ActuallTasks} />
                <Route path="/add" exact component={AddTasks} />
                <Route path="/done" exact component={CompletedTasks} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/search" exact component={SearchResult} />
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
