import styles from './BoardMemberCard.module.css'
import facebookIcon from '/images/facebook.png'
import instagramIcon from '/images/instagram.png'

const BoardMemberCard = ({ name, role, image, email, facebook, instagram }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>

      {email && (
        <p className={styles.email}>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}

      <div className={styles.socials}>
        {facebook && (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        )}
      </div>
    </div>
  )
}

export default BoardMemberCard
