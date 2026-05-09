import { useState, useCallback } from 'react'
import { questions } from '../data/questions'
import { calcResult } from '../utils/calcResult'

export function useTest(onFinish) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleSelect = useCallback((option) => {
    const newAnswers = [
      ...answers,
      { questionId: questions[currentIndex].id, scores: option.scores }
    ]
    setAnswers(newAnswers)

    if (currentIndex === questions.length - 1) {
      onFinish(calcResult(newAnswers))
    } else {
      setTimeout(() => setCurrentIndex(i => i + 1), 400)
    }
  }, [answers, currentIndex, onFinish])

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setAnswers(prev => prev.slice(0, -1))
      setCurrentIndex(i => i - 1)
    }
  }, [currentIndex])

  return { currentIndex, answers, handleSelect, handlePrev }
}
