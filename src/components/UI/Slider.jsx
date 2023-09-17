import { useState, useEffect, useRef } from 'react'
import styles from './Slider.module.css'

function Slider(props) {
  const [selectedContent, setSelectedContent] = useState('')

  return (
    <div>
      <p className={styles.content}>{props.children}</p>
    </div>
  )
}

export default Slider
