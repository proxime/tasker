import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../actions/other';

const Alert = ({ isOpenMenu, msg, type, removeAlert, id }) => {
    useEffect(() => {
        setTimeout(() => {
            removeAlert(id);
        }, 5000);
    });

    return (
        <div className={`alert ${type} ${isOpenMenu ? 'smaller' : ''}`}>
            <p>{msg}</p>
        </div>
    );
};

export default connect(null, { removeAlert })(Alert);
