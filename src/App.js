import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setAsExpiredLocalTask } from './actions/tasks';

const App = () => {
    useEffect(() => {
        store.dispatch(setAsExpiredLocalTask());
    }, []);

    return (
        <Router>
            <Provider store={store}>
                <Navbar />
                <Aside />
                <Main />
            </Provider>
        </Router>
    );
};

export default App;
