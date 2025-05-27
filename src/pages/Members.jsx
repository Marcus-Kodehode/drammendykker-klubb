import MembershipInfo from './sections/members/MembershipInfo';
import JoinInstructions from './sections/members/JoinInstructions';
import Logos from './sections/members/Logos';
import styles from './Members.module.css';

const Members = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Medlemmer</h1>
      <div className={styles.content}>
        <MembershipInfo />
        <div>
          <JoinInstructions />
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Members;
