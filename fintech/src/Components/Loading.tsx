import React from "react"
import styles from './loading.module.css'

const center: React.CSSProperties = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translalet(-50%)'
}

const Loading = () => {
  return (
    <div style={center}>
      <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading