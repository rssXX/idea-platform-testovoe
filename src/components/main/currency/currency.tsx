import React from 'react';
import {useCurrencyStore} from "../../../store";
import {exchangeRates} from "../../../utils/consts";
import {CurrencyType} from "../../../utils/types";

const Currency: React.FC = () => {
    const { currency, setCurrency } = useCurrencyStore();

    return (
        <div>
            <label htmlFor="currency-selector">Выберите валюту:</label>
            <select
                id="currency-selector"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyType)}
            >
                {Object.keys(exchangeRates).map((curr) => (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Currency;
