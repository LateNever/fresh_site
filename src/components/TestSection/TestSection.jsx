import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './TestSection.module.css'

function TestSection(props) {
  const [showMode, setShowMode] = useState(true)

  const handlerClick = () => {
    setShowMode(!showMode)
    // console.log('hi')
    // console.log({ showMode })
  }

  return (
    <div className={styles.container}>
      <button className="butoon" onClick={handlerClick}>
        SHOW
      </button>
      <AnimatePresence>
        {showMode && (
          <motion.div
            className={styles.testDiv}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            TestDiv
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TestSection
