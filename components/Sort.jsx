'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Sort = ({ sort, disabled }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (e) => {
        const sortValue = e.target.value;
        const params = new URLSearchParams(searchParams)
        params.set('sort', sortValue)
        router.push('/search' + '?' + params.toString())
    }

    return (
        <fieldset disabled={disabled}>
            <label htmlFor='sort'>Sort by</label>
            <select id="sort" className='base-input select' onChange={handleSort} value={sort}>
                <option value='title'>Title ascending</option>
                <option value='new'>Latest Published</option>
                <option value='old'>Oldest Published</option>
            </select>
        </fieldset>
    )
}

export default Sort