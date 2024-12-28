import React from 'react';
import styles from './blockFiltersAndSort.module.scss'
import {Currency, Filter} from '../'

const BlockFiltersAndSort: React.FC = () => {

    return (
        <div className={`${styles.container} card`}>
            <div>
                <div className={`${styles.title}`}>Валюта</div>
                <Currency/>
            </div>
            <div>
                <div className={`${styles.title}`}>Количество пересадок</div>
                <Filter/>
            </div>
        </div>
    );
};

export default BlockFiltersAndSort;
