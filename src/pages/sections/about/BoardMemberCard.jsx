import styles from './BoardMemberCard.module.css'

const BoardMemberCard = ({ name, role, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  )
}

export default BoardMemberCard
