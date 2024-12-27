import React from 'react';
import styles from './blockFiltersAndSort.module.scss'
import {Sort, Currency, Filter} from '../'

const BlockFiltersAndSort: React.FC = () => {

    return (
        <div className={`${styles.container} card`}>
            <div>
                <div>Сортировка</div>
                <Sort/>
            </div>
            <div>
                <div>Валюта</div>
                <Currency/>
            </div>
            <div>
                <div>Количество пересадок</div>
                <Filter/>
            </div>
        </div>
    );
};

export default BlockFiltersAndSort;
