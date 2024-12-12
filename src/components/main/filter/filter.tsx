import React from 'react';
import {useFilterStore} from "../../../store";

const Filter: React.FC = () => {
    const { stopsFilter, setStopsFilter, optionsFilter: options } = useFilterStore();

    const isSelected = (id) => stopsFilter.includes(id);

    const handleCheckboxChange = (id) => {
        if (stopsFilter.includes(id)) {
            setStopsFilter(stopsFilter.filter((optionId) => optionId !== id));
        } else {
            setStopsFilter([...stopsFilter, id]);
        }
    };

    return (
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
    );
};

export default Filter;
