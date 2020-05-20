import React from 'react';
import AccountInfo from '../AccountInfo';
import SectionTitle from '../SectionTitle';
import Expired from './Expired';

const ExpiredTasks = () => {
    return (
        <>
            <AccountInfo />
            <SectionTitle>Wygasłe Zadania</SectionTitle>
            <Expired />
        </>
    );
};

export default ExpiredTasks;
