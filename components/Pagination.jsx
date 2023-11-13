'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ totalPages, currentPage, disabled }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    let pages = [];
    for (let i = 1; i <= totalPages; i++) pages.push(i);

    const handleChange = (e) => {
        const pageValue = e.target.value;
        const params = new URLSearchParams(searchParams)
        params.set('page', pageValue)
        router.push('/' + '?' + params.toString())
    }

    return (
        <div>
            <label htmlFor="page-selector">Go to page</label>
            <select disabled={disabled} className='base-input sort' id="page-selector" onChange={handleChange} value={currentPage}>
                {pages.map((page) => (
                    <option key={page} value={page}>{page}</option>
                ))}
            </select>
        </div>
    )
}

export default Pagination