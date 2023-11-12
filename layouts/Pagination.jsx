'use client'
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ totalPages }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handleChange = (e) => {
        const pageValue = e.target.value;
        const params = new URLSearchParams(searchParams)
        params.set('page', pageValue)
        router.push('/' + '?' + params.toString())
    }

    return (
        <select onChange={handleChange}>
            {pages.map((page) => (
                <option key={page} value={page}>{page}</option>
            ))}
        </select>
    )
}

export default Pagination