import styles from './BoardGrid.module.css'
import boardData from '../../../data/boardData'
import BoardMemberCard from './BoardMemberCard' // 👈 denne manglet

const BoardGrid = () => {
  return (
    <section className={styles.grid}>
      {boardData.map((member, index) => (
        <BoardMemberCard
          key={index}
          name={member.name}
          role={member.role}
          image={member.image}
          email={member.email}            // 👈 LEGG TIL DISSE
          facebook={member.facebook}
          instagram={member.instagram}
        />
      ))}
    </section>
  )
}

export default BoardGrid

