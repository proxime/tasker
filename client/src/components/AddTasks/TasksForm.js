import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLocalTask } from '../../actions/tasks';

const TasksForm = ({ addLocalTask }) => {
    const [formData, setFormData] = useState({
        task: '',
        expires: '',
        desc: '',
        important: false,
    });

    const { task, expires, desc, important } = formData;

    const handleDataChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCheckChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        addLocalTask(formData);
        setFormData({
            task: '',
            expires: '',
            desc: '',
            important: false,
        });
    };

    if (expires.length > 0) {
        const year = expires.slice(0, 4);
        if (year > 2099) {
            setFormData({
                ...formData,
                expires: '2099' + expires.slice(4),
            });
        }
    }

    return (
        <div className="tasks-form">
            <form onSubmit={e => onSubmit(e)}>
                <label className="tasks-form__task">
                    <p className="tasks-form__name">
                        Zadanie <span>*</span>
                    </p>
                    <input
                        type="text"
                        name="task"
                        value={task}
                        onChange={e => handleDataChange(e)}
                    />
                </label>
                <label className="tasks-form__date">
                    <p className="tasks-form__name">Ważne do</p>
                    <input
                        type="date"
                        name="expires"
                        value={expires}
                        max="2099-12-31"
                        onChange={e => handleDataChange(e)}
                    />
                </label>
                <label className="tasks-form__desc">
                    <p className="tasks-form__name">Opis</p>
                    <textarea
                        name="desc"
                        value={desc}
                        onChange={e => handleDataChange(e)}
                    ></textarea>
                </label>
                <label className="tasks-form__important">
                    <input
                        type="checkbox"
                        name="important"
                        checked={important}
                        onChange={e => handleCheckChange(e)}
                    />
                    <p>
                        {important ? (
                            <i className="fas fa-star"></i>
                        ) : (
                            <i className="far fa-star"></i>
                        )}{' '}
                        Ważne
                    </p>
                </label>
                <button className="tasks-form__btn">Dodaj Zadanie</button>
            </form>
        </div>
    );
};

TasksForm.propTypes = {
    addLocalTask: PropTypes.func.isRequired,
};

export default connect(null, { addLocalTask })(TasksForm);
