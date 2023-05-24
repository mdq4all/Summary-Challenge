import React from 'react'
import styles from './header.module.css';

const Header = ({ average }) => {
  return (
    <header className={styles.container}>
        <h3>Your Result</h3>
        <div className={styles.container_score}>
            <h2>{average}</h2>
            <p>of 100</p>
        </div>
        <div className={styles.container_performance}>
            <h2>Great</h2>
            <p>You scored higher tha 65% of the people who have taken these tests</p>
        </div>
    </header>
  )
}

export default Header
