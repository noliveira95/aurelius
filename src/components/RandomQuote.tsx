import { useState } from 'react';
import axios from 'axios';

const URL = "https://stoicquotesapi.com/v1/api/quotes/random";

export default function RandomQuote() {
    const [quote, setQuote] = useState("Memento Mori");
    const [author, setAuthor] = useState("");

    function getQuote() {
      axios.get(URL).then((res) => {
        setQuote(res.data.body);
        setAuthor(res.data.author);
      }).catch((err) => {
        console.log(err);
      })
    }

    return (
      <div className='quote-container'>
        <div className='quote'>
          "{quote}"
        </div>
        <div className='author'>
          - {author}
        </div>
        <button className='generate-quote' onClick={getQuote}>New Quote</button>
      </div>
    )
  }