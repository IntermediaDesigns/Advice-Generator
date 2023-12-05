'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  
  const fetchData = () => {
    
    try {
      fetch('https://api.adviceslip.com/advice', {cache:'no-store'} )
      
      .then(response => response.json())
      .then(data => {
        
        setQuote(data)
      })
      
    } catch (error) {
      setError(error)
    }
     
  };

  useEffect(() => {
    
    fetchData();
  }, []);


  return (
    <div className={styles.mainContainer}>
      <div className={styles.adviceContainer}>
      <p className={styles.adviceTitle}>ADVICE #</p>
        <div className={styles.advice}>
        
          <div className={styles.quote}>
            {quote ? <div>{quote.slip.advice}</div> : <div>Loading...</div>}
          </div>

          <svg
            className={styles.divider}
            width='295'
            height='16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g fill='none' fillRule='evenodd'>
              <path fill='#4F5D74' d='M0 8h122v1H0zM173 8h122v1H173z' />
              <g transform='translate(138)' fill='#CEE3E9'>
                <rect width='5' height='12' rx='3' />
                <rect x='14' width='5' height='12' rx='3' />
              </g>
            </g>
          </svg>
        </div>
        <div className={styles.diceContainer}>
          <button className={styles.diceButton} onClick={fetchData}>
            <svg
              className={styles.dice}
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z'
                fill='#202733'
              />
            </svg>
          </button>
        </div>
      </div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}
