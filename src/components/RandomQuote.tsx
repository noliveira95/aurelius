import { useState } from 'react';
import axios from 'axios';

const URL = "https://stoicquotesapi.com/v1/api/quotes/random";

export default function RandomQuote() {
    const [quote, setQuote] = useState("Memento Mori");

    function getQuote() {
      axios.get(URL).then((res) => {
        setQuote(res.data.body);
      }).catch((err) => {
        console.log(err);
      })
    }

    return (
      <div className='quote-container'>
        <div className='quote'>
          "{quote}"
        </div>
        <button className='generate-quote' onClick={getQuote}>New Quote</button>
      </div>
    )
  }