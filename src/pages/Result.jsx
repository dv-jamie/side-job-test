import { results } from '../data/results'
import { useClipboard } from '../hooks/useClipboard'
import { SITE_URL, SHARE_TEXT } from '../constants'
import Button from '../components/Button'
import Tag from '../components/Tag'
import styles from './Result.module.css'

export default function Result({ resultKey, onRestart }) {
  const result = results[resultKey]
  const { copied, copy } = useClipboard()

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나의 부업 유형은 "${result.name}"!`,
          text: SHARE_TEXT(result.name, result.sub),
          url: SITE_URL
        })
      } catch {
        // 사용자가 공유 취소한 경우 무시
      }
    } else {
      copy(SITE_URL)
    }
  }

  if (!result) return null

  return (
    <div className="gradientBg">
      <div className={styles.card}>
        <p className={styles.emoji}>{result.emoji}</p>
        <h1 className={styles.name}>{result.name}</h1>
        <div className={styles.hashtagRow}>
          {result.sub.split(', ').map(tag => (
            <span key={tag} className={styles.hashtag}>#{tag}</span>
          ))}
        </div>

        <hr className={styles.divider} />

        <ul className={styles.descList}>
          {result.desc.map((d, i) => (
            <li key={i} className={styles.descItem}>✦ {d}</li>
          ))}
        </ul>

        <hr className={styles.divider} />

        <p className={styles.sectionLabel}>추천 부업</p>
        <div className={styles.tags}>
          {result.jobs.map(job => (
            <Tag key={job} variant="purple">{job}</Tag>
          ))}
        </div>

        <p className={[styles.sectionLabel, styles.mt16].join(' ')}>어울리는 플랫폼</p>
        <div className={styles.tags}>
          {result.platforms.map(p => (
            <Tag key={p} variant="gray">{p}</Tag>
          ))}
        </div>

        <div className={styles.actionRow}>
          <button
            className={`${styles.shareIconBtn} ${copied ? styles.shareIconBtnCopied : ''}`}
            onClick={handleShare}
            aria-label="공유하기"
          >
            {copied ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
            )}
          </button>
          <Button variant="primary" fullWidth onClick={onRestart}>
            다시 테스트하기
          </Button>
        </div>
      </div>
    </div>
  )
}
