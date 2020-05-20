import React from 'react';
import { Link } from 'react-router-dom';

const AccountInfo = () => {
    return (
        <div className="account-info">
            <div className="account-info__darken"></div>
            <div className="account-info__text">
                <h1 className="account-info__title">
                    Zarejestruj się i używaj aplikacji z każdego miejsca
                </h1>
                <p className="account-info__content">
                    Rejestracja pozwoli Ci przechowywać zadania w bazie danych,
                    dzięki czemu zyskasz do nich dostęp na wszystkich swoich
                    urządzeniach
                </p>
                <Link to="/register" className="account-info__register">
                    Rejestracja
                </Link>
                <div className="account-info__login">
                    Masz już konto? <Link to="/login">Zaloguj się</Link>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
