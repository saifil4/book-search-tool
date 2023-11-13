'use client'
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home({ searchParams }) {

  const router = useRouter();
  const { search } = useSearchParams();
  const [searchValue, setSearchValue] = useState(search || '');

  const handleSearch = () => {
    if (searchValue.length === 0) return
    const params = new URLSearchParams(searchParams)
    params.set('search', searchValue)
    router.push('/search' + '?' + params.toString())
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <main className="home-main">
      <section className="home-page-container">
        <div className="bg-opacity"></div>
        <div className="home-content">
          <div>
            <h1 className="home-title">Book Finder</h1>
            <p className="home-subtitle">Find your next favourite book to read</p>
          </div>
          <input
            type='text'
            className='base-input search'
            placeholder="Search for books(eg. harry potter)"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            value={searchValue} />
          <button className="button" onClick={handleSearch} >Search</button>
        </div>
      </section>
    </main>
  )
}