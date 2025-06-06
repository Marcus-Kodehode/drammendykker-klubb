import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { diveSites } from '../../../data/diveSites'
import styles from './DiveSiteDetails.module.css'
import { Link } from 'react-router-dom'

const DiveSiteDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const currentIndex = diveSites.findIndex(s => s.id === id)
  const site = diveSites[currentIndex]

  if (!site) {
    return <Navigate to="/dykkerplasser" replace />
  }

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + diveSites.length) % diveSites.length
    navigate(`/dykkerplasser/${diveSites[prevIndex].id}`)
  }

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % diveSites.length
    navigate(`/dykkerplasser/${diveSites[nextIndex].id}`)
  }

  const renderLevelTags = (levelStr) => {
    if (!levelStr) return 'Ukjent'
    return levelStr.split('–').map(level => (
      <span key={level} className={`${styles.levelTag} ${styles[level.trim()]}`}>
        {level.trim()}
      </span>
    ))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.backLink}>
        <Link to="/dykkerplasser" className={styles.backLink}>
          ← Tilbake til dykkersteder
        </Link>
      </div>

      <div className={styles.navButtons}>
        <button onClick={handlePrev}>⟵ Forrige</button>
        <button onClick={handleNext}>Neste ⟶</button>
      </div>

      <div className={styles.card}>
        <h1 className={styles.title}>{site.name}</h1>

        {site.image && (
          <img
            src={site.image}
            alt={site.name}
            className={styles.image}
          />
        )}

        <div className={styles.infoGrid}>
          <p><strong>Sted:</strong> {site.address || 'Ikke oppgitt'}</p>
          <p><strong>Nivå:</strong> {renderLevelTags(site.recommendedLevel)}</p>
          <p><strong>Adkomst:</strong> {site.access || 'Ukjent'}</p>
          <p><strong>Bemerkelser:</strong> {site.remarks || 'Ingen'}</p>
          <p><strong>Dybde:</strong> {site.depth || 'Ikke oppgitt'}</p>
          <p><strong>Fasiliteter:</strong> {site.facilities || 'Nei'}</p>
          <p><strong>Skyllemuligheter:</strong> {site.rinseStation || 'Nei'}</p>
          <p><strong>Bom:</strong> {site.tollGate || 'Nei'}</p>
        </div>

        <p className={styles.description}>
          <strong>Beskrivelse:</strong> {site.description}
        </p>
      </div>
    </div>
  )
}

export default DiveSiteDetails
