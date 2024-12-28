import React from 'react';
import styles from './mainPage.module.scss'
import {BlockFiltersAndSort, BlockTickets, Sort} from '../../components/main'

const MainPage: React.FC = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <BlockFiltersAndSort/>
            <div className={`flex-1`}>
                <div className={`flex justify-end card mb-2.5 p-2`}>
                    <Sort/>
                </div>
                <BlockTickets/>
            </div>
        </div>
    );
};

export default MainPage;
