import { useTest } from '../hooks/useTest'
import { questions } from '../data/questions'
import ProgressBar from '../components/ProgressBar'
import styles from './Test.module.css'

export default function Test({ onFinish }) {
  const { currentIndex, handleSelect, handlePrev } = useTest(onFinish)
  const question = questions[currentIndex]

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {currentIndex > 0 && (
          <button className={styles.prevBtn} onClick={handlePrev}>
            ← 이전
          </button>
        )}
        <ProgressBar current={currentIndex + 1} total={questions.length} />
        <div key={currentIndex} className={styles.card}>
          <p className={styles.questionText}>{question.text}</p>
          <div className={styles.options}>
            {question.options.map((option) => (
              <button
                key={option.label}
                className={styles.optionBtn}
                onClick={() => handleSelect(option)}
              >
                <span className={styles.optionLabel}>{option.label}</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
