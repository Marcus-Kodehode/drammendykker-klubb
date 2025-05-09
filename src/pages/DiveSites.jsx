import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import DiveIntro from './sections/divesites/DiveIntro'
import DiveSubmitModal from './sections/divesites/DiveSubmitModal'
import DiveGrid from './sections/divesites/DiveGrid'
import DiveSiteDetails from './sections/divesites/DiveSiteDetails'  // <-- samme mappe som komponentene over
import styles from './DiveSites.module.css'

const DiveSites = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <DiveIntro onOpen={() => setIsOpen(true)} />
      {isOpen && <DiveSubmitModal onClose={() => setIsOpen(false)} />}

      <Routes>
        <Route index element={<DiveGrid />} />
        <Route path=":id" element={<DiveSiteDetails />} />
      </Routes>
    </div>
  )
}

export default DiveSites
