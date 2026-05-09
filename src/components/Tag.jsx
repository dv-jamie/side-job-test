import styles from './Tag.module.css'

export default function Tag({ children, variant = 'purple' }) {
  return (
    <span className={[styles.tag, styles[variant]].join(' ')}>
      {children}
    </span>
  )
}
