'use client'
import React from 'react';
import styles from './card.module.css';

const Card = ({ item }) => {
  return (
    <li key={item.id}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img width="180px" height="275px" src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
        </div>
        <h4>{item.title}</h4>
        <p>by <span className={styles.author}>{item.author_name}</span></p>
      </div>
    </li>
  )
}

export default Card