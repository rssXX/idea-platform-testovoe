import React from 'react';
import {useFilterStore} from "../../../store";
import {FilterCheckbox} from "../filterCheckbox";
import styles from './filter.module.scss'

const Filter: React.FC = () => {
    const {stopsFilter, setStopsFilter, optionsFilter: options} = useFilterStore();

    const isSelected = (id: number) => stopsFilter.includes(id);

    const isAllSelected = () => {
        return stopsFilter.length === options.length;
    }

    const handleCheckboxChange = (id: number) => {
        if (stopsFilter.includes(id)) {
            setStopsFilter(stopsFilter.filter((optionId) => optionId !== id));
        } else {
            setStopsFilter([...stopsFilter, id]);
        }
    };

    const clickAll = () => {
        setStopsFilter(options.map(elem => elem.id));
    }
    
    const clickOnly = (id: number) => {
        setStopsFilter([id]);
    }

    return (
        <div className={`${styles.container}`}>
            <FilterCheckbox
                id={`checkbox-all`}
                isChecked={isAllSelected()}
                onChange={clickAll}
            >
                <div className={`flex-1`}>Все</div>
            </FilterCheckbox>
            {options.map((option) => (
                <FilterCheckbox
                    key={option.id}
                    id={`checkbox-${option.id}`}
                    isChecked={isSelected(option.id)}
                    onChange={() => handleCheckboxChange(option.id)}
                    onClickOnly={() => clickOnly(option.id)}
                >
                    <span>{option.label}</span>
                </FilterCheckbox>
            ))}
        </div>
    );
};

export default Filter;
