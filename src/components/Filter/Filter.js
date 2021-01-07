import React from 'react';
import styles from './styles.module.css';

const Filter = ({ filters, onFilterChange }) => {

    const isSelected = e => {
        onFilterChange(e.target.value);
    }

    return (

        <div className={styles.filtercontainer}>
            <span className={styles.filterlabel}>Filter:</span>
            <select id="filter" className={styles.filter} onChange={e => isSelected(e)}>
                <option value="" disabled hidden selected>Select</option>
                {
                    filters.map((filter, i) => {
                        return (
                            <option
                                key={i}
                                data-name={filter}
                                value={filter}
                            >
                                {filter}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Filter
