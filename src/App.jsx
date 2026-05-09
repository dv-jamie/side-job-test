import { useState, useEffect } from 'react'
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Result'

export default function App() {
  const [page, setPage] = useState('home')
  const [resultKey, setResultKey] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const result = params.get('result')
    if (result) {
      setResultKey(result)
      setPage('result')
    }
  }, [])

  if (page === 'home') {
    return <Home onStart={() => setPage('test')} />
  }
  if (page === 'test') {
    return (
      <Test
        onFinish={(key) => {
          setResultKey(key)
          setPage('result')
          const url = new URL(window.location.href)
          url.searchParams.set('result', key)
          history.replaceState(null, '', url.toString())
        }}
      />
    )
  }
  return (
    <Result
      resultKey={resultKey}
      onRestart={() => {
        setResultKey('')
        setPage('home')
        history.replaceState(null, '', window.location.pathname)
      }}
    />
  )
}
