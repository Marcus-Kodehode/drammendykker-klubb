import styles from './OverlayButton.module.css';

const OverlayButton = ({ label, position, onClick }) => {
  return (
    <button
      className={`${styles.button} ${styles[position]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OverlayButton;
