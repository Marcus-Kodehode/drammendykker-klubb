import styles from './Logos.module.css';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <a href="https://medlemskap.nif.no/Start/Index/22502" target="_blank" rel="noopener noreferrer">
        <img src="/images/norges-idrettsforbund.png" alt="Norges Idrettsforbund logo" />
      </a>
      <a href="https://www.norsk-tipping.no/grasrotandelen/din-mottaker/913221265" target="_blank" rel="noopener noreferrer">
        <img src="/images/grasrotandelen.webp" alt="Grasrotandelen logo" />
      </a>
    </div>
  );
};

export default Logos;
