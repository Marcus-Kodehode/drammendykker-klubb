import styles from './DiveGrid.module.css'

const dummySites = [
  {
    name: 'Åbyfjorden',
    location: 'Vestfold',
    difficulty: 'Middels',
    description: 'Populært sted med klart vann og mye fisk.'
  },
  {
    name: 'Hvasser',
    location: 'Tjøme',
    difficulty: 'Lett',
    description: 'Perfekt for nybegynnere og lett tilgjengelig.'
  }
]

const DiveGrid = () => {
  return (
    <section className={styles.grid}>
      {dummySites.map((site, idx) => (
        <div key={idx} className={styles.card}>
          <h3>{site.name}</h3>
          <p><strong>Sted:</strong> {site.location}</p>
          <p><strong>Nivå:</strong> {site.difficulty}</p>
          <p>{site.description}</p>
        </div>
      ))}
    </section>
  )
}

export default DiveGrid
