import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styles from './Calendar.module.css';

const events = [
  { title: 'Skagerak Dykkekrets tur – Egypt', start: '2025-11-28', end: '2025-12-07' },
  { title: 'Fridykkersamling Drammenhallen', start: '2025-01-15' },
];

const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'today prev,next'
        }}
        buttonText={{
          today: 'I dag'
        }}
      />
    </div>
  );
};

export default Calendar;
