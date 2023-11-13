import React from 'react';
import Image from 'next/image';

const Card = ({ item }) => {
  return (
    <li key={item.id}>
      <div className="card">
        <div className="image-container">
          {
            item?.cover_i ? 
            <Image
              width="180"
              height="275"
              src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} 
              alt={item.title} /> :
            <img src='./default_image.png' alt={item.title} />
          }
        </div>
        <div>
          <h4>{item.title}</h4>
          <p>by <span className="author">{item.author_name}</span></p>
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