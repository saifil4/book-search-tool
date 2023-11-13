import React from 'react';
import Search from '@/components/Search';

export default function Home() {
  return (
    <main className="home-main">
      <section className="home-page-container">
        <div className="bg-opacity"></div>
        <div className="home-content">
          <div>
            <h1 className="home-title">Book Finder</h1>
            <p className="home-subtitle">Find your next favourite book to read</p>
          </div>
          <Search search={null} buttonClass='button white'/>
        </div>
      </section>
    </main>
  )
}