'use client'
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const Search = ({ search }) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(search || '');

    const handleSearch = () => {
        if (searchValue.length === 0) return
        const params = new URLSearchParams(searchParams)
        params.set('search', searchValue)
        params.set('page', 1)
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
        <>
            <input
                type='text'
                className='base-input search'
                placeholder="Search for books(eg. harry potter)"
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                value={searchValue} />
            <button className="button" onClick={handleSearch} >Search</button>
        </>
    )
}

export default Search