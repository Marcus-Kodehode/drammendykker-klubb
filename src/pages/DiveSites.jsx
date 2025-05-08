import { useState } from 'react'
import DiveIntro from './sections/divesites/DiveIntro'
import DiveSubmitModal from './sections/divesites/DiveSubmitModal'
import DiveGrid from './sections/divesites/DiveGrid'
import styles from './DiveSites.module.css'

const DiveSites = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <DiveIntro onOpen={() => setIsOpen(true)} />
      {isOpen && <DiveSubmitModal onClose={() => setIsOpen(false)} />}
      <DiveGrid />
    </div>
  )
}

export default DiveSites
