import styles from './Events.module.css';
import EventsOverview from './sections/events/EventsOverview';
import Calendar from './sections/events/Calendar';

const Events = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Aktiviteter</h1>
      <div className={styles.grid}>
        <EventsOverview />
        <Calendar />
      </div>
    </div>
  );
};

export default Events;
