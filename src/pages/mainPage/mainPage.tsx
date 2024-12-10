import React from 'react';
import styles from './mainPage.module.scss'
import {BlockFiltersAndSort, BlockTickets} from '../../components/main'

const MainPage: React.FC = () => {
    return (
        <div className={`container ${styles.container}`}>
            <BlockFiltersAndSort/>
            <BlockTickets/>
        </div>
    );
};

export default MainPage;