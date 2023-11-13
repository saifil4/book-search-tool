'use client'
import React from 'react';
import Pagination from '../components/Pagination';
import Sort from '../components/Sort';
import { useRouter, useSearchParams } from 'next/navigation';

const SubMenu = ({ sort, totalPages, currentPage, disabled }) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (e) => {
        const pageValue = e.target.value;
        const params = new URLSearchParams(searchParams)
        params.set('page', pageValue)
        router.push('/search' + '?' + params.toString())
    }

    return (
        <div className='submenu'>
            <Sort sort={sort} disabled={disabled} />
            <Pagination totalPages={totalPages} currentPage={currentPage} disabled={disabled} handleChange={handleChange} />
        </div>
    )
}

export default SubMenu