import Button from '../components/Button'
import styles from './Home.module.css'

export default function Home({ onStart }) {
  return (
    <div className="gradientBg">
      <div className={styles.card}>
        <p className={styles.emoji}>💼</p>
        <h1 className={styles.title}>나에게 맞는 부업은?</h1>
        <p className={styles.sub}>12문항으로 알아보는 나의 부업 성향</p>
        <p className={styles.time}>⏱ 약 3분 소요</p>
        <div className={styles.btnWrap}>
          <Button variant="primary" fullWidth onClick={onStart}>
            테스트 시작하기
          </Button>
        </div>
      </div>
    </div>
  )
}
