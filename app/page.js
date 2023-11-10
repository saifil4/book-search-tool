'use client'
import { useState, useEffect, useMemo } from 'react';
import styles from './page.module.css';
import Card from '@/components/card';
import SearchSection from '@/layouts/SearchSection';
import { useSearchParams, useRouter } from 'next/navigation'

export default function Home() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    if (searchValue.length === 0) return
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}}`);
    const data = await res.json();
    console.log(data?.docs);
    setList(data?.docs);
  }

  const handleClick = () => {
    const params = new URLSearchParams(searchParams)
    params.set('search', searchValue)
    router.push('/' + '?' + params.toString())
    fetchData()
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <main className={styles.main}>
      <SearchSection handleChange={handleChange} handleClick={handleClick} searchValue={searchValue} />
      <select>
        <option value="Author(A-Z)"></option>
        <option value="Author(Z-A)"></option>
        <option value="Date of Puslish Latest"></option>
      </select>
      <ul className='card-list'>
        {list?.map((item) => (
          <Card item={item} />
        ))}
      </ul>
    </main>
  )
}
