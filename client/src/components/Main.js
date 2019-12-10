import React from 'react';
import PropTypes from 'prop-types';
import ActuallTasks from './ActuallTasks/ActuallTasks';
import AddTasks from './AddTasks/AddTasks';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import ExpiredTasks from './ExpiredTasks/ExpiredTasks';
import Register from './Auth/Register/Register';
import Login from './Auth/Login/Login';
import SearchResult from './SearchResult';
import Alert from './Alert';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = ({ isOpenMenu, alert }) => {
    return (
        <div className={`container ${isOpenMenu ? 'smaller' : ''}`}>
            <main>
                <Route path="/" exact component={ActuallTasks} />
                <Route path="/add" exact component={AddTasks} />
                <Route path="/done" exact component={CompletedTasks} />
                <Route path="/expired" exact component={ExpiredTasks} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/search" exact component={SearchResult} />
                {alert.msg && (
                    <Alert
                        isOpenMenu={isOpenMenu}
                        msg={alert.msg}
                        type={alert.type}
                        id={alert.id}
                    />
                )}
            </main>
            <footer className="footer">
                <p>Norbert Kułak 2019 &copy;</p>
            </footer>
        </div>
    );
};

Main.propTypes = {
    isOpenMenu: PropTypes.bool.isRequired,
    alert: PropTypes.object,
};

const mapStateToProps = state => ({
    isOpenMenu: state.other.isOpenMenu,
    alert: state.other.alert,
});

export default connect(mapStateToProps)(Main);
