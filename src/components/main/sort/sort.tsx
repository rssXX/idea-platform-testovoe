import React from 'react';
import {useSortStore} from "../../../store";

const Sort: React.FC = () => {
    const { sortOption, setSortOption } = useSortStore();

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as 'default' | 'cheap-first' | 'expensive-first');
    };

    return (
        <div>
            <select value={sortOption} onChange={handleSortChange}>
                <option value="default">По умолчанию</option>
                <option value="cheap-first">Сначала недорогие</option>
                <option value="expensive-first">Сначала дорогие</option>
            </select>
        </div>
    );
};

export default Sort;
