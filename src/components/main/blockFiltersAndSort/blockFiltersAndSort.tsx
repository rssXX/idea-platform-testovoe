import React from 'react';
import styles from './blockFiltersAndSort.module.scss'
import {Sort, Currency, Filter} from '../'

const BlockFiltersAndSort: React.FC = () => {

    return (
        <div className={`${styles.container}`}>
            <Sort/>
            <Currency/>
            <Filter/>
        </div>
    );
};

export default BlockFiltersAndSort;
