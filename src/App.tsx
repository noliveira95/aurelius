import { useState } from 'react'
import './App.css'
import RandomQuote from './components/RandomQuote'

function App() {

  return (
    <div className='main'>
      <h1>Aurelius</h1>
      <RandomQuote />
    </div>
  )
}

export default App
