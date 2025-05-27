import styles from './EventsOverview.module.css';

const EventsOverview = () => {
  return (
    <div className={styles.overview}>
      <h2>Fridykkertrening i basseng.</h2>
      <p>Fridykkeaktiviteter meldes på Spond.</p>
      <p>
        På trening øver vi teknikk, snakker litt om teori, beveger oss, leker og har det gøy!
        Alle er velkommen uansett ferdighetsnivå.
      </p>
      <p>
        Hvis du har lyst til å prøve ut fridykking, ta kontakt og bli med på en trening.
        Du får låne utstyr de første gangene dersom du ikke har selv.
      </p>
      <p>Vi har to baner og prøver å legge opp til mer trening for sertifiserte fridykkere.</p>
      <p><strong>Adresse:</strong> Danvikgata 40, 3045 Drammen</p>
      <p><strong>Gruppekode:</strong> KLQSV</p>

      <div className={styles.spond}>
        <img src="/images/spond.webp" alt="Spond" />
        <div className={styles.stores}>
          <img src="/images/google-play.png" alt="Google Play" />
          <img src="/images/app-store.png" alt="App Store" />
        </div>
      </div>

      <iframe
        title="Google Maps"
        src="https://maps.google.com/maps?q=Danvikgata%2040&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="250"
        className={styles.map}
        loading="lazy"
      ></iframe>

      <img src="/images/vipps.webp" alt="Vipps info" className={styles.vipps} />
    </div>
  );
};

export default EventsOverview;
