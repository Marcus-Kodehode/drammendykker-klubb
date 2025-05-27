import styles from './SupportCard.module.css';
import Button from './Button';

const SupportCard = () => {
  return (
    <div className={styles.card}>
      <h3>Støtt klubben i dag!</h3>
      <p>Bidra til videre drift og aktivitet i klubben gjennom Vipps eller Grasrotandelen.</p>
      <Button text="Støtt oss via Vipps" to="/stott-oss" variant="primary" size="md" />
    </div>
  );
};

export default SupportCard;
