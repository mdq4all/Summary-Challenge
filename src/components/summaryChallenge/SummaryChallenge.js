import React, { useEffect, useState } from 'react'
import Header from './Header'
import styles from './summaryChallenge.module.css'
import Info from './Info'
import data from '../../data.json';

const SummaryChallenge = () => {
  const [average, setAverage] = useState(0);
  
  useEffect(() => {
    let suma = 0;
    data.map(el => suma += el.score);
    setAverage(Math.round(suma/data.length));
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Header average={average} />
        <Info />
      </div>
    </div>
  )
}

export default SummaryChallenge
