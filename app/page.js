'use client'
import { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './page.module.css';
import Card from '@/components/card';
import SearchSection from '@/layouts/SearchSection';
import { useSearchParams, useRouter } from 'next/navigation';
import { SORT_OPTIONS } from '../constants';


const getData = async (searchValue) => {
  try {
    const res = await fetch(`http://openlibrary.org/search.json?q=${searchValue}}`);
    const data = await res.json();
    return data
  } catch (e) {
    console.error(e);
  }
}


export default function Home() {

  const searchParams = useSearchParams()
  const router = useRouter()

  const [bookList, setBookList] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);
  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');


  useEffect(() => {
    if (searchValue.length === 0) return
    const data = getData(searchValue);
    data.then((res) => {
      setBookList(res?.docs);
    })
  }, [])


  const filteredBooks = useMemo(() => {
    if (sortedBy == SORT_OPTIONS.A_TO_Z) {
      return bookList.sort((a, b) => a?.title.localeCompare(b?.title))
    }
    else if (sortedBy === SORT_OPTIONS.Z_TO_A) {
      return bookList.sort((a, b) => b?.title.localeCompare(a?.title))
    }
    else if (sortedBy === SORT_OPTIONS.LATEST) {
      return bookList.sort((a, b) => b.first_publish_year - a.first_publish_year);
    }
    else if (sortedBy === SORT_OPTIONS.OLDEST) {
      return bookList.sort((a, b) => a.first_publish_year - b.first_publish_year);
    }
    return bookList
  }, [bookList, sortedBy])



  const handleClick = () => {
    if (searchValue.length === 0) return
    const params = new URLSearchParams(searchParams)
    params.set('search', searchValue)
    router.push('/' + '?' + params.toString())
    const data = getData(searchValue);
    data.then((res) => {
      setBookList(res?.docs);
    })
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSort = (e) => {
    setSortedBy(parseInt(e.target.value))
  }

  return (
    <main className={styles.main}>
      <SearchSection handleChange={handleChange} handleClick={handleClick} handleSort={handleSort} searchValue={searchValue} />
      <ul className='card-list'>
        {filteredBooks?.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </ul>
    </main>
  )
}
