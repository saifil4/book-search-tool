'use client'
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const Menu = ({ search }) => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(search || '');

    const handleSearch = () => {
        if (searchValue.length === 0) return
        const params = new URLSearchParams(searchParams)
        params.set('search', searchValue)
        router.push('/' + '?' + params.toString())
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className='menu'>
            <input
                type='text'
                className='base-input search'
                placeholder="Search for books(eg. harry potter)"
                onChange={handleChange}
                value={searchValue} />
            <button className="button" onClick={handleSearch} >Search</button>
        </div>
    )
}

export default Menu