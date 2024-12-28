import React from 'react';
import styles from './currency.module.scss'
import {useCurrencyStore} from "../../../store";
import {exchangeRates} from "../../../utils/consts";
import {CurrencyType} from "../../../utils/types";

const Currency: React.FC = () => {
    const {currency, setCurrency} = useCurrencyStore();

    return (
        <div className={`${styles.container}`}>
            {Object.keys(exchangeRates).map((val) => (
                <button
                    key={val}
                    onClick={() => setCurrency(val as CurrencyType)}
                    className={`${styles.btn} ${val === currency ? '!border-blue-500 !bg-blue-500 text-white' : ''}`}
                >
                    {val}
                </button>
            ))}
        </div>
    );
};

export default Currency;
