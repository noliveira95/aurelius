import { useState } from 'react'
import './App.css'

function RandomQuote() {
  const [quote, setQuote] = useState("Memento Mori");
  return (
    <div>
      {quote}
      <button className='generate-quote' onClick={() => setQuote(quote)}>New Quote</button>
    </div>
  )
}

function App() {

  return (
    <div className='main'>
      <h1>Aurelius</h1>
      <div className='quote'>
        <RandomQuote />
      </div>
    </div>
  )
}

export default App
