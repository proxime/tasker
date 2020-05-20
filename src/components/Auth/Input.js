import React from 'react';

const Input = ({ text, name, type, value, handleInputChange }) => {
    return (
        <div className="auth__input">
            <label>
                <p>{text}</p>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={e => handleInputChange(e)}
                />
            </label>
        </div>
    );
};

export default Input;
