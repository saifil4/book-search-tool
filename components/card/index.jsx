'use client'
import React from 'react';
import styles from './card.module.css';
import Image from 'next/image'

const Card = ({ item }) => {
  return (
    <li key={item.id}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            width="180"
            height="275"
            src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
        </div>
        <div>
          <h4>{item.title}</h4>
          <p>by <span className={styles.author}>{item.author_name}</span></p>
          {
            item?.first_publish_year &&
            <p>First published in {item?.first_publish_year}</p>
          }
        </div>
      </div>
    </li>
  )
}

export default Card