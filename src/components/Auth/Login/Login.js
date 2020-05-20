import React, { useState } from 'react';
import SectionTitle from '../../SectionTitle';
import { Link } from 'react-router-dom';
import Input from '../Input';

const Login = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const { login, password } = formData;

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <SectionTitle>Logowanie</SectionTitle>
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
                        <div className="auth__button">
                            <button>Zaloguj</button>
                        </div>
                        <div className="auth__ask">
                            <p>
                                Nie masz konta?{' '}
                                <Link to="/register">Zarejestruj się</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
