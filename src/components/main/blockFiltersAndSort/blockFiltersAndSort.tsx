import React from 'react';
import styles from './blockFiltersAndSort.module.scss'
import {useSortStore, useFilterStore, useCurrencyStore} from "../../../store";

const BlockFiltersAndSort: React.FC = () => {
    const { sortOption, setSortOption } = useSortStore();
    const { stopsFilter, setStopsFilter, optionsFilter: options } = useFilterStore();
    const { currency, setCurrency } = useCurrencyStore();

    const currencies = ["USD", "EUR", "RUB"];

    const isSelected = (id) => stopsFilter.includes(id);

    const handleCheckboxChange = (id) => {
         if (stopsFilter.includes(id)) {
            setStopsFilter(stopsFilter.filter((optionId) => optionId !== id));
        } else {
            setStopsFilter([...stopsFilter, id]);
        }
    };
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as 'default' | 'cheap-first' | 'expensive-first');
    };

    return (
        <div className={`${styles.container}`}>
            <div>
                <select value={sortOption} onChange={handleSortChange}>
                    <option value="default">По умолчанию</option>
                    <option value="cheap-first">Сначала недорогие</option>
                    <option value="expensive-first">Сначала дорогие</option>
                </select>
            </div>
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
                <div>
                    <strong>Текущая валюта:</strong> {currency}
                </div>
            </div>
            <div>
                {options.map((option) => (
                    <div key={option.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isSelected(option.id)}
                                onChange={() => handleCheckboxChange(option.id)}
                            />
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlockFiltersAndSort;