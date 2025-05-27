import styles from './MembershipCard.module.css';
import Button from './Button';

const MembershipCard = () => {
  return (
    <div className={styles.card}>
      <h3>Bli medlem i dag</h3>
      <p>Bli en del av fellesskapet – enten du er nybegynner eller erfaren dykker!</p>
      <Button text="Les mer" to="/medlemmer" variant="alert" size="md" />
    </div>
  );
};

export default MembershipCard;
