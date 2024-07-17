import React from 'react';
import Search from '@/components/Search';

export default function Home() {
  return (
    <main className="home-main">
      <section className="home-page-container">
        <div className="home-content">
          <div>
            <h1>Book Finder</h1>
            <p>Find your next favourite book to read</p>
          </div>
          <Search search={null}/>
        </div>
      </section>
    </main>
  )
}