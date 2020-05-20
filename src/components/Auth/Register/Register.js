import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle';
import Input from '../Input';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        password2: '',
    });

    const { login, password, password2 } = formData;

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <SectionTitle>Rejestracja</SectionTitle>
            <div className="auth">
                <div className="auth__image">
                    <div className="darken"></div>
                </div>
                <div className="auth__form">
                    <form>
                        <Input
                            text="Login"
                            name="login"
                            type="text"
                            value={login}
                            handleInputChange={handleInputChange}
                        />
                        <Input
                            text="Hasło"
                            name="password"
                            type="password"
                            value={password}
                            handleInputChange={handleInputChange}
                        />
                        <Input
                            text="Powtórz hasło"
                            name="password2"
                            type="password"
                            value={password2}
                            handleInputChange={handleInputChange}
                        />
                        <div className="auth__button">
                            <button>Zarejestruj</button>
                        </div>
                        <div className="auth__ask">
                            <p>
                                Masz już konto?{' '}
                                <Link to="/login">Zaloguj się</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
