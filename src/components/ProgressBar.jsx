import styles from './ProgressBar.module.css'

export default function ProgressBar({ current, total }) {
  const percent = (current / total) * 100

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>Q{current} / {total}</p>
      <div className={styles.track}>
        <div className={styles.fill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
