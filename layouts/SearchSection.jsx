'use client'
import React, { useState } from 'react';
import TextInput from '../components/text-input';
import Button from '../components/button';
import { SORT_OPTIONS } from '../constants';
import { useRouter, useSearchParams } from 'next/navigation';


const SearchSection = ({ search }) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(search || '');

    const handleClick = () => {
        if (searchValue.length === 0) return
        const params = new URLSearchParams(searchParams)
        params.set('search', searchValue)
        router.push('/' + '?' + params.toString())
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className='search-container'>
            <h1>Find your next book to read</h1>
            <div className='input-container'>
                <TextInput placeholder="Search for books(eg. harry potter)" onChange={handleChange} value={searchValue} />
                <Button onClick={handleClick}>Search</Button>
                {/* <label>Sort by</label> */}
                {/* <select onChange={handleSort}>
                    <option value={SORT_OPTIONS.DEFAULT}>Default</option>
                    <option value={SORT_OPTIONS.A_TO_Z}>Title A-Z</option>
                    <option value={SORT_OPTIONS.Z_TO_A}>Title Z-A</option>
                    <option value={SORT_OPTIONS.LATEST}>Latest Published</option>
                    <option value={SORT_OPTIONS.OLDEST}>Oldest Published</option>
                </select> */}
            </div>
        </div>
    )
}

export default SearchSection