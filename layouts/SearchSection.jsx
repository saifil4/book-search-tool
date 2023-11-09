import React from 'react'

const SearchSection = () => {
    return (
        <div className={styles.searchContainer}>
            <h1>Find your next book to read</h1>
            <div>
                <SearchInput handleChange={handleChange} searchValue={searchValue} />
                <button onClick={handleClick} >Search</button>
            </div>
        </div>
    )
}

export default SearchSection