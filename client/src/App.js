import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Aside from './components/Aside/Aside';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Router>
        <Provider store={store}>
            <Navbar />
            <Aside />
            <Main />
        </Provider>
    </Router>
);

export default App;
