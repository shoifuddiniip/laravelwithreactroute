import React from 'react';
import {useState, useEffect} from 'react';
import axios from "axios";

const QuoteOfTheDay = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'timshim-quotes-v1.p.rapidapi.com'
        }
      };
      
      fetch('https://timshim-quotes-v1.p.rapidapi.com/quotes', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        // axios
        //     .get("https://quotes.rest/qod")
        //     .then(response => {
        //         // setQuote(response.data.contents.quotes[0].quote);
        //         console.log(response);
        //     });
    }, []);

    return(
        <div>{quote}</div>
        // <div>react</div>
    );
};

export default QuoteOfTheDay;