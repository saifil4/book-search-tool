'use client'
import { useState } from 'react';
import styles from './page.module.css';
import SearchInput from '@/components/SearchInput';
import Card from '@/components/card';

export default function Home() {

  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const fetchData = async () => {
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}}`);
    const data = await res.json();
    setList(data?.docs);
    console.log(data?.docs);
  }


  const handleClick = () => {
    if (searchValue.length > 0) {
      fetchData();
    }
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <h1>Find your next book to read</h1>
        <div>
          <SearchInput handleChange={handleChange} searchValue={searchValue} />
          <button onClick={handleClick} >Search</button>
        </div>
      </div>
      <ul>
        {list?.map((item) => (
          <Card item={item} />
        ))}
      </ul>
    </main>
  )
}
