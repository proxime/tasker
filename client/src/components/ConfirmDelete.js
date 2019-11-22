import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ConfirmDelete = ({ setDeleteId, deleteTask, id }) => {
    const confrimDelete = id => {
        deleteTask(id);
        setDeleteId(null);
    };

    return (
        <>
            <div className="confirm-delete">
                <div className="confirm-delete__title">Usuń Zadanie</div>
                <div className="confirm-delete__content">
                    <div className="confirm-delete__text">
                        Czy jesteś pewien, że chcesz usunąć to zadanie?
                    </div>
                    <div className="confirm-delete__buttons">
                        <div
                            className="confirm-delete__button"
                            onClick={() => setDeleteId(null)}
                        >
                            Cofnij
                        </div>
                        <div
                            className="confirm-delete__button"
                            onClick={() => confrimDelete(id)}
                        >
                            Usuń
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="confirm-delete__pop"
                onClick={() => setDeleteId(null)}
            ></div>
        </>
    );
};

ConfirmDelete.propTypes = {
    setDeleteId: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default ConfirmDelete;
