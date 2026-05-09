import { useState } from 'react'
import Home from './pages/Home'
import Test from './pages/Test'
import Result from './pages/Result'

export default function App() {
  const [page, setPage] = useState('home')
  const [resultKey, setResultKey] = useState('')

  if (page === 'home') {
    return <Home onStart={() => setPage('test')} />
  }
  if (page === 'test') {
    return (
      <Test
        onFinish={(key) => {
          setResultKey(key)
          setPage('result')
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
      }}
    />
  )
}
