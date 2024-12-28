import React from 'react';
import styles from './filterCheckbox.module.scss'

interface IFilterCheckboxProps {
    id: string
    isChecked: boolean
    onChange: () => void
    onClickOnly?: () => void
    children?: React.ReactNode
}

const FilterCheckbox: React.FC<IFilterCheckboxProps> = ({id, isChecked, onChange, onClickOnly, children}) => {
    return (
        <div className={`${styles.container}`}>
            <input
                type="checkbox"
                id={`${id}`}
                checked={isChecked}
                onChange={onChange}
                className={`${styles.customCheckbox}`}
            />
            <label htmlFor={`${id}`}>
                {children}
            </label>
            {
                onClickOnly && (
                    <div className={`${styles.only}`} onClick={onClickOnly}>Только</div>
                )
            }
        </div>
    );
};

export default FilterCheckbox;