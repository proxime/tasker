import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
            item.addEventListener('click', () => changeMenuState(false));
        });
    }, []);

    return (
        <>
            <div className="mobile-aside__popup"></div>
            <aside className="mobile-aside">
                <div className="mobile-aside__list">
                    <div className="mobile-aside__item">Dodaj Zadanie</div>
                    <div className="mobile-aside__item">Aktualne Zadania</div>
                    <div className="mobile-aside__item">Ukończone Zadania</div>
                    <div className="mobile-aside__item">Zaloguj się</div>
                </div>
            </aside>
        </>
    );
};

MobileAside.propTypes = {
    changeMenuState: PropTypes.func.isRequired,
};

export default connect(null, { changeMenuState })(MobileAside);
