import React from 'react';
import styles from './styles.module.css';

const Filter = ({ filters, onFilterChange, selectedFilters }) => {

    const isSelected = (_, name) => {
        onFilterChange(name);
    }

    return (

        <div className={styles.filtercontainer}>
            <span className={styles.filterlabel}>Filter By Category:</span>
            {
                filters.map((filter, i) => {
                    return (
                        <div
                            key={i}
                            className={selectedFilters[filter].selected ? styles.selected : styles.btn}
                            data-name={filter}
                            onClick={e => isSelected(e, filter)}>
                            {filter}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Filter
