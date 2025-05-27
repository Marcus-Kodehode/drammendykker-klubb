import React from 'react';
import styles from './FilterButtons.module.css';

const FilterButtons = ({ categories, currentFilter, onFilterChange }) => {
  return (
    <nav className={styles.filterNav}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${currentFilter === category ? styles.active : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default FilterButtons;
