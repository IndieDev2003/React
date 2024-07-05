import {useState} from 'react'
import './RandomQuote.css'


const RandomQuote = () => {

    //? Variable for storing the quotes
    let quotes = [];

    //? Functio to getting quotes from type fit api
    async function loadQuote() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random =()=>{
        const select = quotes[Math.floor(Math.random(0,7)*quotes.length)];
        setQuote(select)
    }
    const [quote,setQuote]= useState({
        text:"Lets See What Will Happen With Your Words",
        author:"World"
    });

    const Twitter = () => {
        window.open(`https://x.com/intent/tweet?text=${quote.text}-${quote.author.split(',')[0]}`);

    }

    //?Loading quotes from type fit
    loadQuote();

  return (
    <>
        <div className="container">``
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <i className="ri-restart-line" onClick={random}></i>
                        <i className="ri-twitter-x-fill" onClick={Twitter}></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RandomQuote;