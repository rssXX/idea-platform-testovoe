import React from 'react';
import {useCurrencyStore} from "../../../store";

const Currency: React.FC = () => {
    const { currency, setCurrency } = useCurrencyStore();

    const currencies = ["USD", "EUR", "RUB"];
    return (
        <div>
            <label htmlFor="currency-selector">Выберите валюту:</label>
            <select
                id="currency-selector"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
            >
                {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                        {curr}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Currency;
