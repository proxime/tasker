import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeMenuState } from '../../actions/other';

const MobileAside = ({ changeMenuState }) => {
    useEffect(() => {
        const items = document.querySelectorAll('.mobile-aside__item');
        items.forEach((item, index) => {
            setTimeout(
                () => item.classList.add('show'),
                (index * 0.1 + 0.2) * 1000,
            );
        });
    }, []);

    return (
        <>
            <div className="mobile-aside__popup"></div>
            <aside className="mobile-aside">
                <div className="mobile-aside__list">
                    <Link
                        to="/add"
                        className="mobile-aside__item"
                        onClick={() => changeMenuState(false)}
                    >
                        Dodaj Zadanie
                    </Link>
                    <Link
                        to="/"
                        className="mobile-aside__item"
                        onClick={() => changeMenuState(false)}
                    >
                        Aktualne Zadania
                    </Link>
                    <Link
                        to="/done"
                        className="mobile-aside__item"
                        onClick={() => changeMenuState(false)}
                    >
                        Ukończone Zadania
                    </Link>
                    <Link
                        to="/expired"
                        className="mobile-aside__item"
                        onClick={() => changeMenuState(false)}
                    >
                        Wygasłe Zadania
                    </Link>
                    <Link
                        to="/login"
                        className="mobile-aside__item"
                        onClick={() => changeMenuState(false)}
                    >
                        Zaloguj się
                    </Link>
                </div>
            </aside>
        </>
    );
};

MobileAside.propTypes = {
    changeMenuState: PropTypes.func.isRequired,
};

export default connect(null, { changeMenuState })(MobileAside);
