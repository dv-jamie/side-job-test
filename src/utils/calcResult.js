export function calcResult(answers) {
  const total = {}
  answers.forEach(a => {
    Object.entries(a.scores).forEach(([k, v]) => {
      total[k] = (total[k] || 0) + v
    })
  })

  const isStable   = (total.stability  || 0) >= (total.explosive  || 0)
  const isSolo     = (total.solo       || 0) >= (total.social     || 0)
  const isTimeFree = (total.timeFree   || 0) >= (total.highIncome || 0)
  const isDigital  = (total.digital    || 0) >= (total.offline    || 0)

  if (!isDigital && !isSolo)    return 'coach'      // 오프라인 + 사교형
  if (!isDigital)               return 'market'     // 오프라인 + 독립형 (핸드메이드·플리마켓)
  if (!isSolo && !isStable)     return 'creator'    // 디지털 + 사교형 + 도전형
  if (!isStable)                return 'educator'   // 디지털 + 독립형 + 도전형
  if (!isSolo)                  return 'seller'     // 디지털 + 사교형 + 안정형 (스마트스토어)
  if (!isTimeFree)              return 'investor'   // 디지털 + 독립형 + 안정형 + 수입중시
  return 'freelancer'                               // 디지털 + 독립형 + 안정형 + 시간중시
}
