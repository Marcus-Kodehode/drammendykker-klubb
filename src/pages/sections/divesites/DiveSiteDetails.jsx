import { useParams, Navigate } from 'react-router-dom'
import { diveSites } from '../../../data/diveSites'  // <-- opp 3 nivåer til src/data
import styles from './DiveSiteDetails.module.css'

const DiveSiteDetails = () => {
  const { id } = useParams()
  const site = diveSites.find(s => s.id === id)

  if (!site) {
    return <Navigate to="/dykkerplasser" replace />
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{site.name}</h1>
      {site.image && (
        <img
          src={site.image}
          alt={site.name}
          className={styles.image}
        />
      )}
      <p><strong>Sted:</strong> {site.location}</p>
      <p><strong>Nivå:</strong> {site.difficulty}</p>
      <p className={styles.description}>{site.description}</p>
    </div>
  )
}

export default DiveSiteDetails
