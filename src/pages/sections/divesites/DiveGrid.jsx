import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './DiveGrid.module.css';
import { diveSites } from '../../../data/diveSites';
import FilterButtons from './components/FilterButtons';

const categories = ['All', 'P1', 'P2', 'P3', 'Vegg', 'Vrakdykk'];

const DiveGrid = () => {
  const [filter, setFilter] = useState('All');

  const filteredSites =
    filter === 'All'
      ? diveSites
      : diveSites.filter((site) => site.categories.includes(filter));

  return (
    <>
      <FilterButtons
        categories={categories}
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <section className={styles.grid}>
        {filteredSites.map((site) => (
          <Link
            key={site.id}
            to={`/dykkerplasser/${site.id}`}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img
                src={site.image}
                alt={site.name}
                className={styles.image}
              />
            </div>
            <h3>{site.name}</h3>
          </Link>
        ))}
      </section>
    </>
  );
};

export default DiveGrid;
