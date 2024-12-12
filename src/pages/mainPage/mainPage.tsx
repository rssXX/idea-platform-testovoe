import React from 'react';
import styles from './mainPage.module.scss'
import {BlockFiltersAndSort, BlockTickets} from '../../components/main'

const MainPage: React.FC = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <BlockFiltersAndSort/>
            <BlockTickets/>
        </div>
    );
};

export default MainPage;
