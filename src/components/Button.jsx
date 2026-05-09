import styles from './Button.module.css'

export default function Button({ children, onClick, variant = 'primary', fullWidth = false }) {
  return (
    <button
      className={[
        styles.btn,
        styles[variant],
        fullWidth ? styles.fullWidth : ''
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
