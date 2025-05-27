import styles from './MembershipInfo.module.css';

const MembershipInfo = () => {
  return (
    <div className={styles.container}>
      <h2>Priser</h2>
      <div className={styles.cardGroup}>
        <div className={styles.card}>
          <h3>Hovedmedlem – <span>Nok 600</span></h3>
          <p>Apparat og/eller fridykker</p>
        </div>
        <div className={styles.card}>
          <h3>Familiemedlem – <span>Nok 300</span></h3>
          <p>Når en annen i husstanden allerede er medlem</p>
        </div>
        <div className={styles.card}>
          <h3>Støttemedlem – <span>Nok 300</span></h3>
          <p>Hvis du bare ønsker å støtte klubben og dens fantastiske arbeid...</p>
        </div>
      </div>
    </div>
  );
};

export default MembershipInfo;
