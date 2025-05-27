import styles from './JoinInstructions.module.css';

const JoinInstructions = () => {
  return (
    <div className={styles.card}>
      <h2>Meld deg inn her</h2>
      <p>
        Meld deg inn ved å trykke på logoen til Norges idrettsforbund rett under denne teksten.
      </p>
      <p>
        eller send oss en e-post: <a href="mailto:info@drammensportsdykkere.no">info@drammensportsdykkere.no</a><br />
        Inkluder navn, adresse, fødselsdato og om du er fri- eller apparatdykker.
      </p>
    </div>
  );
};

export default JoinInstructions;

