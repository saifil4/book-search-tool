'use client'
import React from 'react';
import styles from './card.module.css';

const Card = ({ item }) => {
  return (
    <li key={item.id} className={styles.card}>
      <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.author_name}</p>
    </li>
  )
}

export default Card