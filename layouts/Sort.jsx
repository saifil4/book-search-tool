'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Sort = ({ sort }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (e) => {
        const sortValue = e.target.value;
        const params = new URLSearchParams(searchParams)
        params.set('sort', sortValue)
        router.push('/' + '?' + params.toString())
    }

    return (
        <div>
            <label htmlFor='sort'>Sort by</label>
            <select id="sort" className='base-input select' onChange={handleSort} value={sort}>
                <option value='title_sort asc'>Title ascending</option>
                <option value='first_publish_year desc'>Latest Published</option>
                <option value='def(first_publish_year, 9999) asc'>Oldest Published</option>
            </select>
        </div>
    )
}

export default Sort